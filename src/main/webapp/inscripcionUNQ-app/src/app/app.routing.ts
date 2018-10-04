﻿import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeleccionDeMateriasPorCursarComponent } from './seleccion-de-materias-por-cursar/seleccion-de-materias-por-cursar.component';
import { EncuestaFinalizadaComponent } from './encuesta-finalizada/encuesta-finalizada.component';
import { LoginUsuarioComponent } from './autenticacion/login-usuario.component';
import { TareasUsuarioComponent } from './tareas-usuario/tareas-usuario.component';
import { LoginEstudianteComponent } from './autenticacion/login-estudiante.component';
import { InformacionEstudianteComponent } from './informacion-del-usuario/informacion-estudiante.component';
import { EncuestasDisponiblesComponent } from './encuestas-disponibles/encuestas-disponibles.component';
import { MateriasAprobadasComponent } from './materias-aprobadas/materias-aprobadas.component';
import { CarrerasComponent } from './carreras/carreras.component';
import { MateriasComponent } from './materias/materias.component';
import { ofertaAcademicaComponent } from './oferta-academica/oferta-academica.component';
import { MateriasDeOfertaComponent } from './materias-de-oferta/materias-de-oferta.component';

const APP_ROUTES: Routes = [
  { path: '', component: LoginEstudianteComponent, pathMatch: 'full' },
  { path: 'encuestas', component: EncuestasDisponiblesComponent },
  { path: 'materias-aprobadas', component: MateriasAprobadasComponent },
  { path: 'verificacion-de-datos', component: InformacionEstudianteComponent },
  { path: 'materias-por-cursar', component: SeleccionDeMateriasPorCursarComponent },
  { path: 'encuesta-finalizada', component: EncuestaFinalizadaComponent },
  { path: 'login-usuario', component: LoginUsuarioComponent },
  { path: 'tareas-usuario', component: TareasUsuarioComponent },
  { path: 'carreras', component: CarrerasComponent },
  { path: 'materias', component: MateriasComponent },
  { path: 'oferta-academica', component: ofertaAcademicaComponent },
  { path: 'materias-de-oferta', component: MateriasDeOfertaComponent },
  { path: '**', redirectTo: '' }
];

  @NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
