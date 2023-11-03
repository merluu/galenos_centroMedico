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
      // Obtén los valores del formulario
      const correoControl = this.loginForm.get('correo');
      const contraseniaControl = this.loginForm.get('contrasenia');
  
      if (correoControl && contraseniaControl) {
        const correo = correoControl.value;
        const contrasenia = contraseniaControl.value;
  
        // Crea un objeto para enviar los datos a la API
        const loginData = {
          correo: correo,
          contrasenia: contrasenia
        };
  
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
  
        // Realiza la solicitud HTTP POST a la API
        this.loginService.loginPaciente(loginData, httpOptions).subscribe((response: HttpEvent<boolean>) => {
          if (response) {
            // Si la respuesta es true, redirige al home
            console.log('Usuario valido.');
            this.router.navigate(['/']);
          } else {
            // Si la respuesta es false, muestra un mensaje de usuario inválido
            console.log('Usuario inválido.');
            Swal.fire('Error', 'El email y/o password son incorrectos', 'error');

            this.loginForm.reset();
          }
        });
      }
    } else {
      // Muestra un mensaje de error si el formulario no es válido
      console.log('Por favor, complete todos los campos.');
    }
  }
  
  ngOnInit() {}

}
