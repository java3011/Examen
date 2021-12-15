import { Component, OnInit } from '@angular/core';
import { ListaProductos } from '../../interfaces/productos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  
  ListaProductos=ListaProductos;
  startRating=0;

  constructor() { }

  ngOnInit(): void {
  }

}
