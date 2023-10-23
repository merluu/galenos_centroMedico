import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Todos los campos están llenos, redirige a la página deseada
      this.router.navigate(['pages/home']);
    } else {
      // Muestra un mensaje de error o realiza otra acción según tus necesidades
      console.log('Por favor, complete todos los campos.');
    }
  }

  //navegarARegistro() {
    //this.router.navigate(['/registro']); // Reemplaza 'registro' con la ruta real de tu página de registro
  //}

 // navegarARecuperar() {
    //this.router.navigate(['/recuperar-contrasenia']); 
 // }


  ngOnInit() {}

}
