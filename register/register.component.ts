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
  private idClient = new FormControl('');
  private name = new FormControl('');
  private phone = new FormControl('');
  private email = new FormControl('');
  private bDate = new FormControl('');
  private username = new FormControl('');
  private password = new FormControl('');

  dt = new Date(this.bDate.value);
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  // Envia el JSON al REST
  sendPost(){

    var jsonPost = {"idClient":parseInt(this.idClient.value), "name":this.name.value, "phone":this.phone.value, "email":this.email.value , "bDate":this.dt,
                "username": this.username.value , "password" : this.password.value };

    this.http.post("http://localhost:5000/api/clientN",jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    // this.router.navigate(['clientes']);
  }

}
