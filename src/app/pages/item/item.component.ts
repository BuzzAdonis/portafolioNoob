import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import{ProductoDescricion} from '../../interfaces/producto-descripcion.interface';
import {InfoPaginaService} from '../../services/info-pagina.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

producto:ProductoDescricion;
id: string;
  constructor(private route: ActivatedRoute, public productoServices:ProductosService,public _servicio: InfoPaginaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros=>{
      this.productoServices.gerProducto(parametros['id']).subscribe((producto: ProductoDescricion)=>{
        this.id=parametros['id'];
         this.producto=producto;
      });
      //console.log(parametros['id']);
    });
  }

}
