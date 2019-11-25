import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// Inicializa las variables del Foro
  private nombre = new FormControl('');
  private apellido = new FormControl('');
  private rol = new FormControl('');
  private username = new FormControl('');
  private password = new FormControl('');

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  // Envia el JSON al REST
  sendPost(){

    var jsonPost = {"nombre":this.nombre.value, "apellido":this.apellido.value , "rol":parseInt(this.rol.value),
                "username": this.username.value , "password" : this.password.value };

    this.http.post("http://httpbin.org/post",jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    // this.router.navigate(['clientes']);
  }

}
