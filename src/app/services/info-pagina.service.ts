import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info:any ={};
  cargada =false;

constructor(private http:HttpClient){
    //console.log('Servio de info pagina listo');
    //leer el Archo .json
    this.http.get('assets/data/data-pagina.json')
    .subscribe(resp =>{
      this.cargada=true;
      this.info=resp;
      console.log(resp['email']);});
   }
}