import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-clientes',
  templateUrl: './edit-clientes.component.html',
  styleUrls: ['./edit-clientes.component.css']
})
export class EditClientesComponent implements OnInit {

  // Inicializacion de variables del foro
  private area = new FormControl('');
  private idFuncionario = new FormControl('');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

// Envia el JSON al servidor REST
  sendPost(){


    var jsonPost = {"area":this.area.value}
    var who = this.idFuncionario.value
    var api = "http://127.0.0.1:5000/api/funcionario/"
    var url= api.concat(who)

    this.http.put(url,jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    this.router.navigate(['clientes']);
  }


}
