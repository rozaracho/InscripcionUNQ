import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material';
import {FeedbackUsuarioDialogoComponent} from './feedback-usuario-dialogo/feedback-usuario-dialogo.component';
import { Router} from '@angular/router';
import {HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UtilesService {

  dialogo;

  constructor(
    private dialog: MatDialog,
    private router: Router,
  ) {
  }

  mostrarMensajeYRedireccionar(mensaje, ruta) {
    const dialogConfig = this.crearConfiguracionDelDialogo(mensaje);
    const dialogRef = this.dialog.open(FeedbackUsuarioDialogoComponent,
      dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
        this.router.navigate([ruta]);
      });

  }

  crearConfiguracionDelDialogo(msj: String, cargando= false) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '600px';
    dialogConfig.height = '200px';
    dialogConfig.data = {
        mensaje: msj,
        cargando: cargando
      };
    return dialogConfig;
  }

 irA(ruta) {
   this.router.navigate([ruta]);
 }

 mostrarMensaje(mensaje) {
   const dialogConfig = this.crearConfiguracionDelDialogo(mensaje);
   this.dialog.open(FeedbackUsuarioDialogoComponent,
     dialogConfig);
 }

 salir() {
   localStorage.clear();
   this.irA('');
 }

 crearFecha(fecha) {
    const date = new Date();
    date.setDate(fecha.dayOfMonth);
    date.setMonth(fecha.monthValue -1 );
    date.setFullYear(fecha.year);
    date.setHours(fecha.hour);
    date.setMinutes(fecha.minute);
    date.setSeconds(fecha.second);
    return date;
  }

  mostrarMensajeYSalir(mensaje) {
    this.mostrarMensaje(mensaje);
    this.salir();

  }

  mostrarMensajeDeError(error: HttpErrorResponse) {

     if (error.status >= 500) {
       const mensaje = 'En este momento no se puede procesar la petición. Por favor uelve a intentarlo';
       this.mostrarMensajeYSalir(mensaje);
     } else {
       this.mostrarMensaje(error.error.msg);
     }
  }

  activarDialogoCargando() {
    const mensaje = 'Procesado....';
    const dialogConfig = this.crearConfiguracionDelDialogo(mensaje, true);
    const dialogRef = this.dialog.open(FeedbackUsuarioDialogoComponent,
    dialogConfig);
    this.dialogo = dialogRef;
  }

  desactivarDialogoCargandoYRedireccionar(direccion: string) {
    this.dialogo.close();
    this.dialogo = null;
    this.irA(direccion);
  }

}
