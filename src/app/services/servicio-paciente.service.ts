import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Paciente } from '../interface/paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPacienteService {

  // Define API
  basepath = 'https://tareas.cibeyer.repl.co';

  constructor(private http: HttpClient) { }

  // Trae lista de pacientes
  getPacientes(): Observable<Paciente[]> {
    return this.http
      .get<Paciente[]>(this.basepath + '/api/pacientes')
  }

  addPaciente(paciente: any, httpOptions: any): Observable<HttpEvent<Paciente>> {
    return this.http.post<Paciente>(
      this.basepath + '/api/pacientes/add',
      JSON.stringify(paciente),
      httpOptions
    );
  }
}