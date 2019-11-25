import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from "@angular/common/http";

declare let jsPDF;

@Component({
  selector: 'app-create-maletas',
  templateUrl: './create-maletas.component.html',
  styleUrls: ['./create-maletas.component.css']
})
export class CreateMaletasComponent implements OnInit {
  // inicializacion de variables del foro
  private idBranchOffice = new FormControl('');
  private name = new FormControl('');
  private address = new FormControl('');


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Sends JSON created in createJSON() via REST service
   */
  sendPost(){

    var jsonPost = {"idBranchOffice":this.idBranchOffice.value, "name":this.name.value,
                    "address":this.address.value};
    var oof= this.address.value
    var yes= "http://127.0.0.1:5000/api/placeN/"
    var url= yes.concat(oof);
    this.http.post(url,jsonPost)
      .toPromise()
      .then(data => {
        console.log(data);
      });

    this.router.navigate(['maletas']);
  }

}
