import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PacienteListComponent } from './pages/paciente-list/paciente-list.component';
import { PacienteModificarComponent } from './pages/paciente-modificar/paciente-modificar.component';
import { AdminComponent } from './pages/admin/admin.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'paciente-list', component: PacienteListComponent },
  { path: 'paciente-modificar/:rut', component: PacienteModificarComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
