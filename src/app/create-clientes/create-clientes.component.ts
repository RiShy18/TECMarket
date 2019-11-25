import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { Type } from '@angular/compiler/src/core';

@Component({
  selector: 'app-create-clientes',
  templateUrl: './create-clientes.component.html',
  styleUrls: ['./create-clientes.component.css']
})
export class CreateClientesComponent implements OnInit {
  // inicializacion de variables del foro
  private idFuncionario = new FormControl('');
  private nombre = new FormControl('');
  private tipo = new FormControl('');
  private fechaIngreso = new FormControl('');
  private area = new FormControl('');



  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Sends JSON created in createJSON() via REST service
   */
  sendPost(){

    var jsonPost = {"idFuncionario":this.idFuncionario.value,"nombre":this.nombre.value,
                    "tipo":this.tipo.value,
                    "fechaIngreso":this.fechaIngreso.value, "area":this.area.value}

    this.http.post("http://localhost:5000/api/funcionarioN",jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    this.router.navigate(['clientes']);
  }

}
