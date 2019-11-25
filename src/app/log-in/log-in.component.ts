//import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommsService} from '../comms.service';
import { Observable } from 'rxjs';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router"



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
// Inicializacion de valores del foro
  private username = new FormControl('');
  private password = new FormControl('');
//  Consigue los usuarios validos para el log in del REST
  private USERS_DATA = []
  private clientesObservable : Observable<any[]>;

  constructor(private communicationService : CommsService , private router : Router) {
    this.clientesObservable = this.communicationService.getUsers();
    this.communicationService.getUsers().subscribe((res : any[])=>{
      this.USERS_DATA = res;
      console.log(this.USERS_DATA);
    })


  }
// Valida que la cuenta sea autentica
  validate() : void{
    var user = this.username;
    var pw = JSON.stringify(this.password.value);
    var authpw = JSON.stringify(this.USERS_DATA[0][user.value].password)

    if (pw === authpw){
      this.router.navigate(['home']);
    }
  
  }



  ngOnInit() {
  }

}
