import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InforPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  equipo:any[] =[];

  constructor( private http:HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo(){
    
    //leer el archivo js con data
    this.http.get('assets/data/data-pagina.json').subscribe((resp:InfoPagina) =>{

      this.cargada = true;
      this.info = resp;
      //console.log( resp.titulo );
    });
  }

  private cargarEquipo(){
    //leer el archivo js con data
    this.http.get('https://angular-html-ym-default-rtdb.firebaseio.com/equipo.json').subscribe((resp:any) =>{

    
      this.equipo = resp;
      
    });
  }
}


