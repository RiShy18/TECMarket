import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-edit-bag-carts',
  templateUrl: './edit-bag-carts.component.html',
  styleUrls: ['./edit-bag-carts.component.css']
})
export class EditBagCartsComponent implements OnInit {
  // Inicializacion de las variables del foro
  private idAeropuerto = new FormControl('');
  private nombre = new FormControl('');
  private direccion = new FormControl('');
  private telefono = new FormControl('');
  private web = new FormControl('');


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

// Envia el JSON al REST
  sendPost(){

    var jsonPost = {"nombre":this.nombre.value,
                    "direccion":this.direccion.value,"telefono":this.telefono.value,
                    "web":this.web.value};
    var ToChange=this.idAeropuerto.value
    var url= 'http://127.0.0.1:5000/api/aeropuerto/'
    var URL= url.concat(ToChange);
    this.http.put(URL,jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    this.router.navigate(['bagCarts']);
  }

}
