import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-create-bag-carts',
  templateUrl: './create-bag-carts.component.html',
  styleUrls: ['./create-bag-carts.component.css']
})
export class CreateBagCartsComponent implements OnInit {
  //inicializa las variables recibidas del formulario
  private idAeropuerto = new FormControl('');
  private nombre = new FormControl('');
  private direccion = new FormControl('');
  private telefono = new FormControl('');
  private web = new FormControl('')


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Sends JSON created in createJSON() via REST service
   */
  sendPost(){
        /**
     * Construye los headers necesarios para el REST service
     */

    var jsonPost = {"idAeropuerto":this.idAeropuerto.value,"nombre":this.nombre.value,
                    "direccion":this.direccion.value,"telefono":this.telefono.value,
                    "web":this.web.value
                  };
    this.http.post("http://localhost:5000/api/aeropuertoN",jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    this.router.navigate(['bagCarts']);
  }

}
