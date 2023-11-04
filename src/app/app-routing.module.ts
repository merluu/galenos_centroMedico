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
  { path: 'centro-especialidad', component: CentroEspecialidadComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
