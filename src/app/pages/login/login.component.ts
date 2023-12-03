import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioLoginService } from 'src/app/services/servicio-login.service';
import { HttpHeaders } from '@angular/common/http'; 
import { HttpEvent } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private loginService: ServicioLoginService ) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const correoControl = this.loginForm.get('correo');
      const contraseniaControl = this.loginForm.get('contrasenia');
  
      if (correoControl && contraseniaControl) {
        const correo = correoControl.value;
        const contrasenia = contraseniaControl.value;
  
        const loginData = {
          correo: correo,
          contrasenia: contrasenia
        };
  
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
  
        this.loginService.loginPaciente(loginData, httpOptions).subscribe((response: HttpEvent<boolean>) => {
          if (response) {
            console.log('Usuario valido.');
            Swal.fire('ok', 'Ha iniciado sesión correctamente', 'success');
            this.router.navigate(['/']);
          } else {
            console.log('Usuario inválido.');
            Swal.fire('Error', 'El email y/o password son incorrectos', 'error');

            this.loginForm.reset();
          }
        });
      }
    } else {
      console.log('Por favor, complete todos los campos.');
    }
  }
  
  ngOnInit() {}

}
