import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CrudMesaComponent } from './components/crud-mesa/crud-mesa.component';
import { CrudPlatilloComponent } from './components/crud-platillo/crud-platillo.component';
import { CrudSocioComponent } from './components/crud-socio/crud-socio.component';
import { MenuComponent } from './components/menu/menu.component';
import { CrudUsuarioComponent } from './components/crud-usuario/crud-usuario.component';
import { TransactBoletaComponent } from './components/transact-boleta/transact-boleta.component';


@NgModule({
  declarations: [
    AppComponent,
    CrudMesaComponent,
    CrudPlatilloComponent,
    CrudSocioComponent,
    MenuComponent,
    CrudUsuarioComponent,
    TransactBoletaComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
