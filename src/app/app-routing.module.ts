import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PacienteListComponent } from './pages/paciente-list/paciente-list.component';
import { PacienteModificarComponent } from './pages/paciente-modificar/paciente-modificar.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MedicoListComponent } from './pages/medico-list/medico-list.component';
import { MedicoAgregarComponent } from './pages/medico-agregar/medico-agregar.component';
import { MedicoModificarComponent } from './pages/medico-modificar/medico-modificar.component';
import { MedicoAgregarDisponibilidadComponent } from './pages/medico-agregar-disponibilidad/medico-agregar-disponibilidad.component';
import { CentroEspecialidadComponent } from './pages/centro-especialidad/centro-especialidad.component'; 
import {MedicoListCentroEspeComponent } from './pages/medico-list-centro-espe/medico-list-centro-espe.component';
import { ReservarHoraComponent } from './pages/reservar-hora/reservar-hora.component';
import { MedicoCancelarDisponibilidadComponent } from './pages/medico-cancelar-disponibilidad/medico-cancelar-disponibilidad.component';
import { RutCancelarReservaComponent } from './pages/rut-cancelar-reserva/rut-cancelar-reserva.component';
import { CancelarReservaPacienteComponent } from './pages/cancelar-reserva-paciente/cancelar-reserva-paciente.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'paciente-list', component: PacienteListComponent },
  { path: 'paciente-modificar/:rut', component: PacienteModificarComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'medico-list', component: MedicoListComponent },
  { path: 'medico-agregar', component: MedicoAgregarComponent },
  { path: 'medico-modificar/:rut', component: MedicoModificarComponent },
  { path: 'medico-agregar-disponibilidad/:rut', component: MedicoAgregarDisponibilidadComponent},
  { path: 'centro-especialidad', component: CentroEspecialidadComponent },
  { path: 'medico-list-centro-espe/:centroId/:especialidadId', component: MedicoListCentroEspeComponent },
  {path: 'reservar-hora/:run_medico/:nombres/:ape_paterno',component: ReservarHoraComponent },
  { path: 'medico-cancelar-disponibilidad/:rut/:nombres/:ape_paterno', component: MedicoCancelarDisponibilidadComponent},
  { path: 'rut-cancelar-reserva', component: RutCancelarReservaComponent},
  { path: 'cancelar-reserva-paciente/:rut', component: CancelarReservaPacienteComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
