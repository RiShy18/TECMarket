import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommsService} from '../comms.service';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class FuncionariosComponent implements OnInit {
    // JSON recibido del REST
    private FUNC_DATA = []
    private maletasObservable : Observable<any[]>;
  
    // Informacion de columnas
    displayedColumns: string[] = ['idFuncionario','nombre','tipo','fechaIngreso','area'];
    dataSource = new MatTableDataSource(this.FUNC_DATA);
  
    // Funcion de la barra de filtraje de la tabla
    applyFilter (filterValue: string){
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
    // Consigue infomracion del REST
    constructor(private communicationService : CommsService) {
      this.maletasObservable = this.communicationService.getFuncionarios();
      this.communicationService.getFuncionarios().subscribe((res : any[])=>{
        this.FUNC_DATA = res;
        this.dataSource = new MatTableDataSource(this.FUNC_DATA);
        console.log(this.FUNC_DATA);
      })
    }
  
    ngOnInit() {
    }
  
  }