import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommsService {

  constructor(private http : HttpClient) {
    // this.getData().subscribe(data => {
    //   console.log('comms',data)
    // });    
  }

  // public getData(){
  //   return this.http.get('https://my-json-server.typicode.com/typicode/demo/posts')
  //   //return this.http.get('https://my-json-server.typicode.com/bakkim05/clientes/clientes')
  //   .subscribe(data => { console.log(data) })
  // }

  public getFuncionarios(){
    // return this.http.get<any[]>('https://my-json-server.typicode.com/bakkim05/clientes/clientes');
    return this.http.get<any[]>('http://127.0.0.1:5000/api/orders');

  }

  public getAerolineas(){
    return this.http.get<any[]>('http://127.0.0.1:5000/api/offices');
  }

  public getAeropuertos(){
      return this.http.get<any[]>('http://127.0.0.1:5000/api/products');
    }
  //public getBagCarts(){
  //  return this.http.get<any[]>('http://127.0.0.1:5000/api/tasks');
  //}

  public getUsers(){
    return this.http.get<any[]>('https://my-json-server.typicode.com/bakkim05/clientes/users');
  }

  public getDestinos(){
    return this.http.get<any[]>('http://127.0.0.1:5000/api/destinos');
  }

  public getVuelos(){
    return this.http.get<any[]>('http://127.0.0.1:5000/api/vuelos');
  }
  public getCantidad(){
    return this.http.get<any[]>('http://127.0.0.1:5000/api/cantBoletos');
  }

  public getInfoPasajeros(){
    return this.http.get<any[]>('http://127.0.0.1:5000/api/clients');
  }

  public getReportMaletas(){
    return this.http.get<any[]>('https://tabas.azurewebsites.net/api/bags/conciliacion');
  }

  public getBoletos(){
    return this.http.get<any[]>('http://127.0.0.1:5000/api/rangoBoletos');
  }

}
