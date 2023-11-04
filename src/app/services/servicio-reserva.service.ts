import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disponibilidad } from '../interface/disponibilidad';
import { Centroespecialidad } from '../interface/centroespecialidad';

@Injectable({
  providedIn: 'root'
})
export class ServicioReservaService {

  // Define API
  basepath = 'https://tareas.cibeyer.repl.co';

  constructor(private http: HttpClient) { }


  //addReserva(reserva: any, httpOptions: any): Observable<HttpEvent<Reserva>> {
    //return this.http.post<Reserva>(
      //this.basepath + '/api/medicos/add',
      //JSON.stringify(medico),
      //httpOptions
    //);
  //}


  buscarcentroXespecialidad(centroespecialidad: any, httpOptions: any): Observable<HttpEvent<Centroespecialidad>> {
    return this.http.post<Centroespecialidad>(
      this.basepath + '/api/reservas/centroXespecialidad',
      JSON.stringify(centroespecialidad),
      httpOptions
    );
  }





}
