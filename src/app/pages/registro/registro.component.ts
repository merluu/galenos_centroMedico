import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.registerForm.valid) {
      // Todos los campos están llenos, redirige a la página deseada
      this.router.navigate(['rol']);
    } else {
      // Muestra un mensaje de error o realiza otra acción según tus necesidades
      console.log('Por favor, complete todos los campos.');
    }
  }
}