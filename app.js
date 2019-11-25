var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var neo4j = require('neo4j-driver').v1;

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'proyecto1'));
var session = driver.session();

app.get('/', function (req, res) {
    res.send("get");
});

app.post('/user', function (req, res) { //crear usuario 
    var nameR = req.body.id
    session
        .run('CREATE (NameParam:User {id:{NameParam}})', { NameParam: nameR })
        .then(function (result) {
            session.close();
        })
        .catch(function (err) {
            console.log(err);
        });
    res.send('it works');
});

app.post('/branch', function (req, res) { // crear sucursal
    var nameR = req.body.name
    session
        .run('CREATE (NameParam:Branch {name:{NameParam}})', { NameParam: nameR })
        .then(function (result) {
            session.close();
        })
        .catch(function (err) {
            console.log(err);
        });
    res.send('it works');
});
app.post('/order', function (req, res) { // crear pedido
    var nameR = req.body.product
    var nameP = req.body.price
    var nameD = req.body.date
    session
        .run('CREATE (NameParam:Order {product:{productParam}, price:{priceParam}, date:{paramDate}})', { productParam: nameR, priceParam: nameP, paramDate: nameD })
        .then(function (result) {
            session.close();
        })
        .catch(function (err) {
            console.log(err);
        });

    res.send('it works');
});


app.post('/relation/order', function (req, res) {// relacion entre usuario y pedido
    var nameR = req.body.id
    var nameL = req.body.product
    var nameP = req.body.price
    var nameD = req.body.date
    session
        .run('MATCH(User1:User {id:{NameParam}}) MATCH(Order1:Order {product:{LocParam},price:{PriceParam},date:{paramDate}}) CREATE (User1)-[:Bought]->(Order1)', { NameParam: nameR, LocParam: nameL, PriceParam: nameP, paramDate: nameD })
        .then(function (result) {
            result.records.forEach(function (records) {
                console.log(records);
            });
            session.close();
        })
        .catch(function (err) {
            console.log(err);
        });
    res.send('it works');
});

app.get('/record', function (req, res) { // historial de un usuario
    var nameR = req.body.id
    session
        .run('match p=(m:User{id:{productParam}})-[:Bought]-(a:Order) return a', { productParam: nameR })
        .then(function (result) {
            result.records.forEach(function (record) {
                console.log(record._fields[0].properties);
            });
        })
        .catch(function (err) {
            console.log(err);
        });

    res.send('it works');
});

app.post('/relation/buy', function (req, res) {// relacion usuario sucursal
    var nameR = req.body.id
    var nameL = req.body.branch
    session
        .run('MATCH(User1:User {id:{NameParam}}) MATCH(Branch1:Branch {name:{LocParam}}) CREATE (User1)-[:Bought_In]->(Branch1)', { LocParam: nameL, NameParam: nameR, })
        .then(function (result) {
            result.records.forEach(function (records) {
                console.log(records);
            });
            session.close();
        })
        .catch(function (err) {
            console.log(err);
        });
    res.send('it works');
});

app.post('/relation/sell', function (req, res) {// relacion pedido sucursal
    var nameL = req.body.name
    var nameR = req.body.product
    session
        .run('MATCH(Order1:Order {product:{NameParam}}) MATCH(Branch1:Branch {name:{LocParam}}) CREATE (Order1)-[:Sell_In]->(Branch1)', { LocParam: nameL, NameParam: nameR, })
        .then(function (result) {
            result.records.forEach(function (records) {
                console.log(records);
            });
            session.close();
        })
        .catch(function (err) {
            console.log(err);
        });
    res.send('it works');
});

app.get('/branch', function (req, res) { // obtener sucursal en la que se haya hecho pedidos

    session
        .run('MATCH ()-[:Bought_In]-(a:Branch) return a')
        .then(function (result) {
            result.records.forEach(function (record) {
                console.log(record._fields[0].properties);
            });
        })
        .catch(function (err) {
            console.log(err);
        });

    res.send('it works');
});

app.get('/topbranch', function (req, res) { // obtener 5 sucursal en la que se haya hecho mas pedidos
    session
        .run('MATCH ()-[:Bought_In]-(a:Branch) return a,count(*) ORDER BY a desc limit 5')
        .then(function (result) {
            result.records.forEach(function (record) {
                console.log(record._fields[0].properties);
            });
        })
        .catch(function (err) {
            console.log(err);
        });

    res.send('it works');
});

app.get('/commonusers', function (req, res) { // obtener usuarios en comun
    var nameR = req.body.id
    session
        .run('MATCH(User1:User {id:{NameParam}}) MATCH (User1:User)-[:Bought_In]-(a:Branch) Match (User2:User)-[:Bought_In]-(a:Branch) return User2 order by User2 desc', { NameParam: nameR, })
        .then(function (result) {
            result.records.forEach(function (record) {
                console.log(record._fields[0].properties);
            });
        })
        .catch(function (err) {
            console.log(err);
        });

    res.send('it works');
});

app.get('/recommendation', function (req, res) { // obtener usuarios en comun
    var nameR = req.body.id
    session
        .run('MATCH(User1:User {id:{NameParam}}) MATCH (User1:User)-[:Bought_In]-(a:Branch) Match (R:Order)-[:Sell_In]-(a:Branch) return R, count(*)', { NameParam: nameR, })
        .then(function (result) {
            result.records.forEach(function (record) {
                console.log(record._fields[0].properties);
            });
        })
        .catch(function (err) {
            console.log(err);
        });

    res.send('it works');
});

app.listen(3000);
console.log('Server Started on Port 3000');

module.exports = app;