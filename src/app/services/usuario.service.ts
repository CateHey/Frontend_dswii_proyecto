import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

const baseURL = "http://localhost:8090/rest/usuario"

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http:HttpClient) { }

  consulta(filtro: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(
      baseURL + '/listaUsuarioPorDescripcionLike/' + filtro
    );
  }

  registra(aux: Usuario): Observable<any> {
    return this.http.post<any>(baseURL + '/registraUsuario', aux);
  }

  actualiza(aux: Usuario): Observable<any> {
    return this.http.put<any>(baseURL + '/actualizaUsuario', aux);
  }

  login(cod_Ingreso: string, clave_usuario: string): Observable<any> {
    const params = new HttpParams()
      .set("cod", cod_Ingreso)
      .set("pass", clave_usuario);
    return this.http.get(baseURL + "/loginUsuario", {params});
  }
}