import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-edit-maletas',
  templateUrl: './edit-maletas.component.html',
  styleUrls: ['./edit-maletas.component.css']
})
export class EditMaletasComponent implements OnInit {

  // Inicializacion de variables del foro
  private idAerolinea = new FormControl('');
  private nombre = new FormControl('');
  private paisVuelo = new FormControl('');


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
// Envia el JSON al servidor REST
  sendPost(){

    var jsonPost = {"nombre":this.nombre.value,
                    "paisVuelo":this.paisVuelo.value};
    var oof= this.idAerolinea.value;
    var api= "http://127.0.0.1:5000/api/aerolinea/"
    var url= api.concat(oof);

    this.http.put(url,jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    this.router.navigate(['maletas']);
  }

}
