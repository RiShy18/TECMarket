from flask import Flask, request
from flask import jsonify
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from flask_cors import CORS

 
app=Flask(__name__)

app.config["MONGO_DBNAME"]= "TECMarket" #"Test1" #"TECPlane"
app.config["MONGO_URI"]= "mongodb+srv://user:user@tecmarket-hjqkz.gcp.mongodb.net/TECMarket" #"mongodb://localhost:27017/Test1" #"mongodb://tecplanecluster-vzxyv.mongodb.net:27017/TECPlane"

mongo= PyMongo(app)
CORS(app)

#Modulo Administrativo

#Colections


#Clients
#Get

@app.route("/api/clients", methods=["GET"]) #API that gets
def get_all_clients():
    data= mongo.db.clients
    result=[]
    for field in data.find(): ## Never show passwords
        result.append({"_id":str(field["_id"]),
        "idClient": field["idClient"],
        "name": str(field["name"]),
	    "phone":field["phone"],
        "email": str(field["email"]),
	    "bDate":str(field["bDate"]),
        "username": str(field["username"]),
        })
    return jsonify(result)

#Post

@app.route("/api/clienteN", methods=["POST"]) #la API de gets es Tasks
def add_cliente():
    data= mongo.db.clients
    idClient=request.get_json()["idClient"] #Insert
    name=request.get_json()["name"] #Insert
    phone=request.get_json()["phone"] #Insert
    email=request.get_json()["email"] #Insert
    bDate=request.get_json()["bDate"] #Insert
    username=request.get_json()["username"] #Insert
    password=request.get_json()["password"] #Insert
    
    task_id = data.insert({"idClient": idClient, "name":name,"phone": phone, "email": email, "bDate": bDate, "username": username, "password": password})

    new_task = data.find_one({"_id": task_id})

    result={"idClient": new_task["idClient"]}
    return jsonify({"result":result})
#ORders
@app.route("/api/orders", methods=["GET"]) #API that gets
def get_all_orders():
    data= mongo.db.orders
    result=[]
    for field in data.find(): # Shows all orders
        result.append({"_id":str(field["_id"]),
        "idOrder": field["idOrder"],
        "idClient": field["idClient"],
        "products": field["products"],
	    "totalAmount":field["totalAmount"],
        "date": str(field["date"]),
	    "state":str(field["state"]),
        "observations": str(field["observations"]),
        })
    return jsonify(result)
#Products
@app.route("/api/products", methods=["GET"]) #API that gets
def get_all_products():
    data= mongo.db.products
    result=[]
    for field in data.find(): # Shows all orders
        result.append({"_id":str(field["_id"]),
        "idProduct": field["idProduct"],
        "name": field["name"],
        "price": field["price"],
	    "amount":field["amount"],
        })
    return jsonify(result)
#Products
@app.route("/api/offices", methods=["GET"]) #API that gets
def get_all_offices():
    data= mongo.db.branchOffice
    result=[]
    for field in data.find(): # Shows all orders
        result.append({"_id":str(field["_id"]),
        "idBranchOffice": field["idBranchOffice"],
        "name": str(field["name"]),
        "latitude": field["latitude"],
	    "longitude":field["longitude"],
        "address": field["address"],
        })
    return jsonify(result)
#Put

@app.route("/api/aeropuerto/<id>", methods=["PUT"]) #Modificar
def update_aeropuerto(id):
    data= mongo.db.aeropuertos
    #Reciclo del Get
    nombre=request.get_json()["nombre"] #dato de inserción
    direccion=request.get_json()["direccion"] #dato de inserción
    telefono=request.get_json()["telefono"] #dato de inserción
    web=request.get_json()["web"]

    data.find_one_and_update({"idAeropuerto":id}, {"$set": {"nombre":nombre, "direccion": direccion, "telefono": telefono, "web": web}}, upsert=False)
    new_data= data.find_one({"idAeropuerto": id})

    result = {"idAeropuerto": new_data["idAeropuerto"]}

    return jsonify({"result": result})

#Delete

@app.route("/api/aeropuerto/<id>", methods=["DELETE"]) #Borrar sin drops
def delete_aeropuerto(id):
    data= mongo.db.aeropuertos

    response= data.delete_one({"idAeropuerto": id})

    if response.deleted_count==1:
        result= {"message": "Borrado we"}
    else:
        result = {"message": "no se we"}

    return jsonify({"result": result})


if __name__ == "__main__":
    app.run(debug=True)