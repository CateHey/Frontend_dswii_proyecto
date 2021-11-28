import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrudMesaComponent } from './components/crud-mesa/crud-mesa.component';
import { CrudPlatilloComponent } from './components/crud-platillo/crud-platillo.component';
import { CrudSocioComponent } from './components/crud-socio/crud-socio.component';
import { MenuComponent } from './components/menu/menu.component';
import { TransactBoletaComponent } from './components/transact-boleta/transact-boleta.component';
import { CrudUsuarioComponent } from './components/crud-usuario/crud-usuario.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';



const routes: Routes = [

  {path:"crudMesa", component:CrudMesaComponent },
  {path:"crudSocio", component:CrudSocioComponent },
  {path:"crudPlatillo", component:CrudPlatilloComponent },
  {path:"boleta", component:TransactBoletaComponent },
  {path:"crudUsuario", component:CrudUsuarioComponent },
  {path:"menu", component:MenuComponent },
  {path:"login", component:LoginComponent },
  {path:"registro", component:RegistroComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
