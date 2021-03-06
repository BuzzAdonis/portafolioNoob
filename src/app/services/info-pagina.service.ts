import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{InfoPagina} from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info:InfoPagina={};
  equipo:any[] =[];
  cargada =false;

constructor(private http:HttpClient){

this.cagarInfo();
this.cargarEquipo();
     
   } 
   private cagarInfo() {
         //console.log('Servio de info pagina listo');
    //leer el Archo .json
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) =>{
      this.cargada=true;
      this.info=resp;
});
      }
      private cargarEquipo(){
        this.http.get('https://angular-html-f90b2.firebaseio.com/equipo.json')
        .subscribe((resp: any[]) =>{
          this.equipo=resp;});

      }
}