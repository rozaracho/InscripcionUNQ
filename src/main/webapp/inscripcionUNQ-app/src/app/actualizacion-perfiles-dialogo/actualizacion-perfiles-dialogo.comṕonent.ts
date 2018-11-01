import { Component, OnInit, Inject } from '@angular/core';
import { Comision } from '../comisiones-de-oferta/comision.model';
import { UtilesService } from '../utiles.service';
import { RestService } from '../rest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { OfertaAcademica } from '../oferta-academica/oferta-academica.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppRutas } from '../app-rutas.model';
import { DataDialogo } from '../alta-usuario-dialogo/data-dialogo.model';
import { Usuario } from '../autenticacion/usuario.model';
import { identity } from 'rxjs';
import { AppMensajes } from '../app-mensajes.model';

@Component({
    selector: 'app-actualizacion-perfiles-dialogo',
    templateUrl: './actualizacion-perfiles-dialogo.component.html',
    styleUrls: ['../dialogo-abm.component.css']
})

export class ActalizacionPerfilesDialogoComponent implements OnInit {
	perfiles: String[];
	perfilesSeleccionados: String[];
	usuario: Usuario;

  constructor(
    private restService: RestService,
    private utilesService: UtilesService,
    private dialogRef: MatDialogRef<ActalizacionPerfilesDialogoComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DataDialogo) {
			this.usuario = data.usuario;
			this.perfilesSeleccionados = this.usuario.perfiles;
		}

  ngOnInit() {
    this.getPerfiles();
	}
	
	getPerfiles() {
		this.restService.getTipoPerfiles().subscribe(perfiles => {
			this.perfiles = this.utilesService.ordenarString(perfiles);
		},
			(err) => {
				this.utilesService.mostrarMensajeDeError(err);
			});
	}

  onChange(perfil, $event) {
		console.log($event);
    if ($event.checked) {
      this.perfilesSeleccionados.push(perfil);
    } else {
        this.perfilesSeleccionados.forEach(perfilSeleccionado => {
            if (perfilSeleccionado == perfil) {
                this.perfilesSeleccionados.splice(this.perfilesSeleccionados.indexOf(perfilSeleccionado), 1);
            }
        });
		}
	}

	verificarSeleccion(perfil) {
    let perfilChecked = false;
    this.perfilesSeleccionados.forEach(perfilSeleccionado => {
        if (perfil == perfilSeleccionado) {
            perfilChecked = true;
        }
    });
    return perfilChecked;
  }


  guardar() {
    if(this.perfilesSeleccionados.length == 0){
      this.utilesService.mostrarMensaje('Debe seleccionar al menos un perfil')
    } else {
			 this.actualizarPerfiles();
    }
	}
	
	actualizarPerfiles(){
		this.restService.actualizarPerfiles(this.usuario.id, this.perfilesSeleccionados).subscribe(res => {
			this.utilesService.mostrarMensaje(AppMensajes.MODIFICACION_PERFIL_EXITOSO);
			this.cerrar();
		},
			(err) => {
				this.utilesService.mostrarMensajeDeError(err);
			});
	}

  cerrar() {
    this.dialogRef.close();
  }
}