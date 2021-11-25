import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crud-usuario',
  templateUrl: './crud-usuario.component.html',
  styleUrls: ['./crud-usuario.component.css']
})
export class CrudUsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];
  filtro: string = '';

  //Json para registrar o actualizar
  usuario: Usuario = {
    cod_usu: 0,
    nombre_usu: '',
    apellido_usu: '',
    cod_Ingreso: '',
    clave_usuario: '',
    estado: 1,
  };
  constructor(
    private usuarioService: UsuarioService,
  ) {}

  ngOnInit(): void {}

  consulta() {
    console.log(' ==> consulta ==> filtro ==> ' + this.filtro);

    var varFiltro: string = this.filtro == '' ? 'todos' : this.filtro;
    this.usuarioService
      .consulta(varFiltro)
      .subscribe((response) => (this.usuarios = response));
  }

  registra() {
    //1 Al registrar el estado es activo
    this.usuario.estado = 1;

    this.usuarioService.registra(this.usuario).subscribe(
      (response) => {
        //2 envío el mensaje
        console.log(response.mensaje);
        alert(response.mensaje);

        //3 atualizo la grilla
        var varFiltro: string = this.filtro == '' ? 'todos' : this.filtro;
        this.usuarioService
          .consulta(varFiltro)
          .subscribe((response) => (this.usuarios = response));

        //4 limpio el formulario actualizando el json
        this.usuario = {
          cod_usu: 0,
          nombre_usu: '',
          apellido_usu: '',
          cod_Ingreso: '',
          clave_usuario: '',
          estado: 1,
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  busca(aux: Usuario) {
    //Actualiza el json con el registro seleccionado en la grila
    this.usuario = aux;
  }

  actualiza() {
    this.usuarioService.actualiza(this.usuario).subscribe(
      (response) => {
        //1 envío el mensaje
        console.log(response.mensaje);
        alert(response.mensaje);

        //2 atualizo la grilla
        var varFiltro: string = this.filtro == '' ? 'todos' : this.filtro;
        this.usuarioService
          .consulta(varFiltro)
          .subscribe((response) => (this.usuarios = response));

        //3 limpio el formulario actualizando el json
        this.usuario = {
          cod_usu: 0,
          nombre_usu: '',
          apellido_usu: '',
          cod_Ingreso: '',
          clave_usuario: '',
          estado: 1,
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getEstado(aux: number): string {
    return aux == 1 ? 'Activo' : 'Inactivo';
  }

  getTextoBotonEstado(aux: number): string {
    return aux == 1 ? 'Desactivar' : 'Activar';
  }

  actualizaEstado(aux: Usuario) {
    this.usuario = aux;
    this.usuario.estado = aux.estado == 1 ? 0 : 1;

    this.usuarioService.actualiza(this.usuario).subscribe(
      (response) => {
        console.log(response.mensaje);

        this.usuarioService
          .consulta(this.filtro)
          .subscribe((response) => (this.usuarios = response));

          this.usuario = {
            cod_usu: 0,
            nombre_usu: '',
            apellido_usu: '',
            cod_Ingreso: '',
            clave_usuario: '',
            estado: 1,
          };
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
