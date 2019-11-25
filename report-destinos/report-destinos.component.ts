import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommsService} from '../comms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-report-destinos',
  templateUrl: './report-destinos.component.html',
  styleUrls: ['./report-destinos.component.css']
})
export class ReportdestinosComponent implements OnInit {

  // Informacion recibido del REST
  private destinos_DATA = []
  private destinosObservable : Observable<any[]>;

  // Informacion de desplegar en la tabla
  displayedColumns: string[] = ['destino','numVeces'];
  dataSource = new MatTableDataSource(this.destinos_DATA);

  // Filtro de busqueda
  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Recepcion de JSON del REST
  constructor(private communicationService : CommsService ) {
    this.destinosObservable = this.communicationService.getReportMaletas();
    this.communicationService.getDestinos().subscribe((res : any[])=>{
      this.destinos_DATA = res;
      this.dataSource = new MatTableDataSource(this.destinos_DATA);
      console.log(this.destinos_DATA);
    })
  }

  ngOnInit() {
  }

}
