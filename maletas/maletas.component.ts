import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommsService} from '../comms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-maletas',
  templateUrl: './maletas.component.html',
  styleUrls: ['./maletas.component.css']
})
export class MaletasComponent implements OnInit {
  // JSON recibido del REST
  private MALETAS_DATA = []
  private maletasObservable : Observable<any[]>;

  // Informacion de columnas
  displayedColumns: string[] = ['idBranchOffice','name','latitude', 'longitude', 'address'];
  dataSource = new MatTableDataSource(this.MALETAS_DATA);

  // Funcion de la barra de filtraje de la tabla
  applyFilter (filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Consigue infomracion del REST
  constructor(private communicationService : CommsService) {
    this.maletasObservable = this.communicationService.getAerolineas();
    this.communicationService.getAerolineas().subscribe((res : any[])=>{
      this.MALETAS_DATA = res;
      this.dataSource = new MatTableDataSource(this.MALETAS_DATA);
      console.log(this.MALETAS_DATA);
    })
  }

  ngOnInit() {
  }

}
