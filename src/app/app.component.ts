import { Component } from '@angular/core';
import{InfoPaginaService} from './services/info-pagina.service';
import{ProductosService} from './services/productos.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='app';
 constructor(public infoPaginaService:InfoPaginaService,
  public productosService:ProductosService){
 }
}
