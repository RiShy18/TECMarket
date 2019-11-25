import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-create-vuelos',
  templateUrl: './create-vuelos.component.html',
  styleUrls: ['./create-vuelos.component.css']
})
export class CreateVuelosComponent implements OnInit {
  // inicializacion de variables del foro
  private idVuelo = new FormControl('');
  private nombre = new FormControl('');
  private origen = new FormControl('');
  private destino = new FormControl('');
  private precio = new FormControl('');
  private restricciones = new FormControl('');
  private caracteristicas = new FormControl('');
  private estado = new FormControl('');
  private capMax = new FormControl('');
  private fecha = new FormControl('');
  


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Sends JSON created in createJSON() via REST service
   */
  sendPost(){

    var jsonPost = {"idVuelo":this.idVuelo.value, "nombre":this.nombre.value,
                    "origen":this.origen.value, "destino": this.destino.value,
                    "precio": this.precio.value, "restricciones": this.restricciones.value,
                    "caracteristicas": this.caracteristicas.value, 
                    "estado": this.estado.value, "capMax":this.capMax.value,
                    "fecha":this.fecha.value};

    this.http.post("http://127.0.0.1:5000/api/vueloN",jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    this.router.navigate(['vuelos']);
  }

}
