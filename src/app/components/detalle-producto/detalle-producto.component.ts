import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListaProductos, Productos } from '../../interfaces/productos';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {
  ListaProductos=ListaProductos;
  ids:any;
  id:number=0;
  Producto:any;

  detalle:FormGroup;
  carrito: AbstractControl;
  constructor(private ruta:ActivatedRoute, public form:FormBuilder) { 
    this.ruta.params.subscribe(datos=>{
      this.id=datos["id"];
    });
    
    this.detalle=this.form.group({ 
      //Profesora no supe como agregar la id del producto en esta seccion 
      //Ademas para ver el guardado de los datos se debe ver en la consola
      idproducto:[],                     
      cant:[''],
      mensa:['Datos guardados']
    });
    this.carrito=this.detalle.controls['carrito'];
  }

  ngOnInit(): void {
    this.Producto=ListaProductos.find(objeto=>objeto.id==this.id);
  }
  
  GuardarDatos(){
    console.log(this.detalle.value);
  }

}
