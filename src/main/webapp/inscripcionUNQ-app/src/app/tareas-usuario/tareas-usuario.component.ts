import { Component} from '@angular/core';
import { RestService } from '../rest.service';
import {UtilesService} from '../utiles.service';
import { AppRutas } from '../app-rutas.model';
import { Equivalencia } from '../equivalencias/equivalencia.model';
import { Usuario } from '../autenticacion/usuario.model';


@Component({
  selector: 'app-tareas-usuario',
  templateUrl: './tareas-usuario.component.html',
  styleUrls: ['./tareas-usuario.component.css']
})
export class TareasUsuarioComponent {
  constructor(
    private restService: RestService,
    private utilesService: UtilesService
  ) {}

  irACarreras() {
    this.restService.getCarreras().subscribe(carreras => {
      localStorage.setItem('carreras',JSON.stringify(carreras));
      this.utilesService.irA('carreras');
    },
    (err) => {
      this.utilesService.mostrarMensajeDeError(err);
    });
  }

  irAMaterias() {
    this.restService.getMaterias().subscribe(materias => {
      localStorage.setItem('materias',JSON.stringify(materias));
      this.utilesService.irA('materias');
    },
    (err) => {
      this.utilesService.mostrarMensajeDeError(err);
    });
  }

  irAOfertaAcademica() {
    this.restService.getOfertas().subscribe(ofertas => {
      localStorage.setItem('ofertas', JSON.stringify(ofertas));
      this.utilesService.irA('oferta-academica');
    },
    (err) => {
      this.utilesService.mostrarMensajeDeError(err);
    });
  }

  irAPeriodos() {
    this.restService.getPeriodos().subscribe(periodos => {
      localStorage.setItem('periodos', JSON.stringify(periodos));
      this.utilesService.irA('periodos');
    },
    (err) => {
      this.utilesService.mostrarMensajeDeError(err);
    });
  }

  irAComisiones() {
    this.utilesService.irA(AppRutas.COMISIONES);
  }

  irAEquivalencias(){
    this.restService.getEquivalencias().subscribe(equivalencias => {
      localStorage.setItem('equivalencias', JSON.stringify(equivalencias));
      this.utilesService.irA('equivalencias');
    },
    (err) => {
      this.utilesService.mostrarMensajeDeError(err);
    });
  }

  irAUsuarios() {
    this.restService.getUsuarios().subscribe(usuarios => {
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      this.utilesService.irA('usuarios');
    },
    (err) => {
      this.utilesService.mostrarMensajeDeError(err);
    });
  }

  irAIncidencias(){
    this.restService.getIncidencias().subscribe(incidencias => {
      localStorage.setItem('incidencias', JSON.stringify(incidencias));
      this.utilesService.irA('incidencias');
    },
    (err) => {
      this.utilesService.mostrarMensajeDeError(err);
    });
  }
}
