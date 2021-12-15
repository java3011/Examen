import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"detalleProducto/:id",component:DetalleProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
