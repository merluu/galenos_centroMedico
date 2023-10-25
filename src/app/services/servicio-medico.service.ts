import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Medico } from '../interface/medico';
import { Observable } from 'rxjs';

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

  addMedico(medico: any, httpOptions: any): Observable<HttpEvent<Medico>> {
    return this.http.post<Medico>(
      this.basepath + '/api/medicos/add',
      JSON.stringify(medico),
      httpOptions
    );
  }

  // trae paciente por rut
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
  
}