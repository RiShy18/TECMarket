import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommsService} from '../comms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bag-carts',
  templateUrl: './bag-carts.component.html',
  styleUrls: ['./bag-carts.component.css']
})

export class BagCartsComponent implements OnInit {
    // informacion recibida del servidor REST en forma de JSON
    private BAGCART_DATA = []
    private bagCartObservable : Observable<any[]>;
    
    // Columnas a desplegar
      displayedColumns: string[] = ['idAeropuerto','nombre','direccion','telefono','web'];
      dataSource = new MatTableDataSource([this.BAGCART_DATA.join(",")]);

  // filtro para buscar item digitado en la barra de busqueda
  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private communicationService : CommsService) {
    // recibe informacion del servidor REST
    this.bagCartObservable = this.communicationService.getAeropuertos();
    this.communicationService.getAeropuertos().subscribe((res : any[])=>{
      this.BAGCART_DATA = res;
      this.dataSource = new MatTableDataSource([this.BAGCART_DATA.join(",")]);
      console.log(this.BAGCART_DATA);
    })
  }

  ngOnInit(): void {
    this.communicationService.getAeropuertos()
    .subscribe(x => 
      {
        this.BAGCART_DATA = x;
        this.dataSource.data = x; //<=== update the datasource's data
      },
      error => console.log("Error (GetData) :: " + error)
    ); 
  }

}


