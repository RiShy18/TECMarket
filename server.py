from flask import Flask, request
from flask import jsonify
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from flask_cors import CORS


app=Flask(__name__)

app.config["MONGO_DBNAME"]= "TECPlane" #"Test1" #"TECPlane"
app.config["MONGO_URI"]= "mongodb+srv://user:user@tecplanecluster-vzxyv.mongodb.net/TECPlane" #"mongodb://localhost:27017/Test1" #"mongodb://tecplanecluster-vzxyv.mongodb.net:27017/TECPlane"

mongo= PyMongo(app)
CORS(app)

#Modulo Administrativo

#Colecciones


#aeropuerto
#Get

@app.route("/api/aeropuertos", methods=["GET"]) #la API de gets es Tasks
def get_all_aeropuertos():
    data= mongo.db.aeropuertos
    result=[]
    for field in data.find():
        result.append({"_id":str(field["_id"]),
        "idAeropuerto": str(field["idAeropuerto"]),
        "nombre": str(field["nombre"]),
	    "direccion": str(field["direccion"]),
	    "telefono":str(field["telefono"]),
	    "web":str(field["web"])})
    return jsonify(result)

#Post

@app.route("/api/aeropuertoN", methods=["POST"]) #la API de gets es Tasks
def add_aeropuerto():
    data= mongo.db.aeropuertos
    idAeropuerto=request.get_json()["idAeropuerto"] #dato de inserción
    nombre=request.get_json()["nombre"] #dato de inserción
    direccion=request.get_json()["direccion"] #dato de inserción
    telefono=request.get_json()["telefono"] #dato de inserción
    web=request.get_json()["web"] #dato de inserción
    
    task_id = data.insert({"idAeropuerto": idAeropuerto, "nombre":nombre, "direccion": direccion, "telefono": telefono, "web": web})

    new_task = data.find_one({"_id": task_id})

    result={"idAeropuerto": new_task["idAeropuerto"]}
    return jsonify({"result":result})

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
