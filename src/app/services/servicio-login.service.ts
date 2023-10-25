import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Login } from '../interface/login'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {

  // Define API
  basepath = 'https://tareas.cibeyer.repl.co';

  constructor(private http: HttpClient) { }

  loginPaciente(login: any, httpOptions: any): Observable<HttpEvent<boolean>> {
    return this.http.post<boolean>(
      this.basepath + '/api/login',
      JSON.stringify(login),
      httpOptions
    );
  }
}
