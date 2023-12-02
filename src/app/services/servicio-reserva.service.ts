import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../interface/reserva';
import { CancelarReservaReq } from '../interface/cancelar-reserva-req';
@Injectable({
  providedIn: 'root'
})
export class ServicioReservaService {

  // Define API
  basepath = 'https://tareas.cibeyer.repl.co';

  constructor(private http: HttpClient) { }

  addReserva(reserva: any, httpOptions: any): Observable<HttpEvent<Reserva>> {
    return this.http.post<Reserva>(
      this.basepath + '/api/reservas/add-reserva',
      JSON.stringify(reserva),
      httpOptions
    );
  }

  obtenerReservaPorRunPaciente(runPaciente: string): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(
      `${this.basepath}/api/reservas/obtener-Reserva/${runPaciente}`
      );
  }

  anularReserva(cancelarReservaReq: any, httpOptions: any): Observable<HttpEvent<CancelarReservaReq>> {
    return this.http.put<CancelarReservaReq>(
      this.basepath + '/api/reservas/anular-reserva',
      JSON.stringify(cancelarReservaReq),
      httpOptions
    );
  }


  }






