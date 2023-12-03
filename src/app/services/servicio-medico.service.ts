import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Medico } from '../interface/medico';
import { Observable } from 'rxjs';
import { Disponibilidad } from '../interface/disponibilidad';
import {MedicoDisponibilidad} from '../interface/medico-disponibilidad'
import { Reserva } from '../interface/reserva';

@Injectable({
  providedIn: 'root'
})
export class ServicioMedicoService {

  // Define API
  basepath = 'https://tareas.cibeyer.repl.co';


  constructor(private http: HttpClient) { }

  // Trae lista de medicos
  getMedicos(): Observable<Medico[]> {
    return this.http
      .get<Medico[]>(this.basepath + '/api/medicos')
  }

  // Trae lista de medicos por centro y especialidad
  traeMedicosPorCentroEspecialidad(idCentro: number, idEspecialidad: number): Observable<Medico[]> {
    return this.http.get<Medico[]>(
      `${this.basepath}/api/medicos/obtener/${idCentro}/${idEspecialidad}`
      );
  }

  // Obtener disponibilidad de un médico por su run_medico y disponible = TRUE
  obtenerDisponibilidadPorRunMedico(runMedico: string): Observable<MedicoDisponibilidad[]> { // aquí el codigo original tenía un any, que lo cambié a Medico
    return this.http.get<MedicoDisponibilidad[]>(
      `${this.basepath}/api/medicos/obtener-disponibilidad/${runMedico}`);
  }

  addMedico(medico: any, httpOptions: any): Observable<HttpEvent<Medico>> {
    return this.http.post<Medico>(
      this.basepath + '/api/medicos/add',
      JSON.stringify(medico),
      httpOptions
    );
  }

  // trae médico por rut
  getMedicoPorRut(rut: String): Observable<Medico>{
    return this.http
      .get<Medico>(this.basepath + '/api/medicos/get/'+rut)
  }

  updateMedico(medico: any, httpOptions: any): Observable<HttpEvent<Medico>> {
    return this.http.put<Medico>(
      this.basepath + '/api/medicos/update',
      JSON.stringify(medico),
      httpOptions
    );
  }

  // para agregar la disponibilidad del médico
  addDisponibilidad(disponibilidad: any, httpOptions: any): Observable<HttpEvent<Disponibilidad>> {
    return this.http.post<Disponibilidad>(
      this.basepath + '/api/medicos/add-disponibilidad',
      JSON.stringify(disponibilidad),
      httpOptions
    );
  }

   // para cancelar la disponibilidad del médico
  quitarDisponibilidad(disponibilidad: any, httpOptions: any): Observable<HttpEvent<Disponibilidad>> {
    return this.http.put<Disponibilidad>(
      this.basepath + '/api/medicos/quitar-disponibilidad',
      JSON.stringify(disponibilidad),
      httpOptions
    );
  }

  
  
}