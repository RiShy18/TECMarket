import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommsService} from '../comms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-report-conciliacion',
  templateUrl: './report-conciliacion.component.html',
  styleUrls: ['./report-conciliacion.component.css']
})
export class ReportConciliacionComponent implements OnInit {

  // Informacion recibido del REST
  private CONCILIACION_DATA = []
  private conciliacionObservable : Observable<any[]>;

  // Informacion de desplegar en la tabla
  displayedColumns: string[] = ['numvuelo','tipoavion','capacidad','maletasbagcart','maletasavion'];
  dataSource = new MatTableDataSource(this.CONCILIACION_DATA);

  // Filtro de busqueda
  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Recepcion de JSON del REST
  constructor(private communicationService : CommsService ) {
    this.conciliacionObservable = this.communicationService.getReportMaletas();
    this.communicationService.getReportMaletas().subscribe((res : any[])=>{
      this.CONCILIACION_DATA = res;
      this.dataSource = new MatTableDataSource(this.CONCILIACION_DATA);
      console.log(this.CONCILIACION_DATA);
    })
  }

  ngOnInit() {
  }

}
