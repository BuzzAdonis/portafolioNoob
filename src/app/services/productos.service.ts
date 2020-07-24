import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Producto}from '../interfaces/producto.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

cargando =true;
producto: Producto[]=[];
productosFiltrados:Producto[]=[];
  constructor(private http: HttpClient) { 

this.cargarProducto();

    }   
    
    private cargarProducto(){

      return new Promise((resolve, reject)=>{
      
      this.http.get('https://angular-html-f90b2.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[])=>{
         this.producto = resp;
        this.cargando = false;
        resolve();
      });
      });
  }
  gerProducto(id: string){

    return this.http.get(`https://angular-html-f90b2.firebaseio.com/productos/${id}.json`);
  }
  buscarPorducto(termino:string){

    if(this.producto.length===0){
 this.cargarProducto().then(()=>{
this.filtrarProductos(termino)
 });
    }else{
      this.filtrarProductos(termino);
    }
    
  }
  private filtrarProductos(termino:string){
   console.log(this.producto)
   this.productosFiltrados=[];
   termino = termino.toLocaleLowerCase();
   this.producto.forEach(prod=>{
     const tituloLower = prod.titulo.toLocaleLowerCase();
if (prod.categoria.indexOf(termino)>=0 || tituloLower.indexOf(termino)>=0){
  this.productosFiltrados.push(prod);
}

   });
  }
}

