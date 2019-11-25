import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-edit-vuelos',
  templateUrl: './edit-vuelos.component.html',
  styleUrls: ['./edit-vuelos.component.css']
})
export class EditVuelosComponent implements OnInit {

  // Inicializacion de variables del foro
  private idVuelo = new FormControl('');
  private nombre = new FormControl('');
  private origen = new FormControl('');
  private destino = new FormControl('');
  private precio = new FormControl('');
  private restricciones = new FormControl('');
  private caracteristicas = new FormControl('');
  private estado = new FormControl('');
  private capMax = new FormControl('');
  private fecha= new FormControl('');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

// Envia JSON al REST
  sendPost(){

    var jsonPost = {"nombre":this.nombre.value,
    "origen":this.origen.value, "destino": this.destino.value,
    "precio": this.precio.value, "restricciones": this.restricciones.value,
    "caracteristicas": this.caracteristicas.value, 
    "estado": this.estado.value, "capMax":this.capMax.value, "fecha":this.fecha.value};

    var ToChange=this.idVuelo.value
    var url= 'http://127.0.0.1:5000/api/vuelo/'
    var URL= url.concat(ToChange);
    this.http.put(URL,jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    this.router.navigate(['vuelos']);
  }

}
