import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommsService} from '../comms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-report-rango',
  templateUrl: './report-rango.component.html',
  styleUrls: ['./report-rango.component.css']
})
export class ReportBoletosComponent implements OnInit {

  // Informacion recibido del REST
  private Boletos_DATA = []
  private BoletosObservable : Observable<any[]>;

  // Informacion de desplegar en la tabla
  displayedColumns: string[] = ['idBoleto','tipo','precio','destino','fecha', 'estado', 'check', 'asiento', 'comprado', 'fcomprado'];
  dataSource = new MatTableDataSource(this.Boletos_DATA);

  // Filtro de busqueda
  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Recepcion de JSON del REST
  constructor(private communicationService : CommsService ) {
    this.BoletosObservable = this.communicationService.getReportMaletas();
    this.communicationService.getBoletos().subscribe((res : any[])=>{
      this.Boletos_DATA = res;
      this.dataSource = new MatTableDataSource(this.Boletos_DATA);
      console.log(this.Boletos_DATA);
    })
  }

  ngOnInit() {
  }

}
