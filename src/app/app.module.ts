import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PacienteListComponent } from './pages/paciente-list/paciente-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PacienteModificarComponent } from './pages/paciente-modificar/paciente-modificar.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MedicoListComponent } from './pages/medico-list/medico-list.component';
import { MedicoAgregarComponent } from './pages/medico-agregar/medico-agregar.component';
import { MedicoModificarComponent } from './pages/medico-modificar/medico-modificar.component';
import { MedicoAgregarDisponibilidadComponent } from './pages/medico-agregar-disponibilidad/medico-agregar-disponibilidad.component';
import { CentroEspecialidadComponent } from './pages/centro-especialidad/centro-especialidad.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    PacienteListComponent,
    PacienteModificarComponent,
    AdminComponent,
    MedicoListComponent,
    MedicoAgregarComponent,
    MedicoModificarComponent,
    MedicoAgregarDisponibilidadComponent,
    CentroEspecialidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
