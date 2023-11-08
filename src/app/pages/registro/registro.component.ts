import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicioPacienteService } from '../../services/servicio-paciente.service';
import { Paciente } from 'src/app/interface/paciente';
import { HttpHeaders } from '@angular/common/http';
import { passwordsMatchValidator } from '../../components/custom-validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myForm: FormGroup;

  constructor(private router: Router, public restApi: ServicioPacienteService, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      run_paciente: ['', Validators.required],
      nombres: ['', Validators.required],
      ape_paterno: ['', Validators.required],
      ape_materno: ['', Validators.required],
      telefono: [''],
      comuna: [''],
      direccion: [''],
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', Validators.required],
      contrasenia2: ['', Validators.required]
    },{
      validator: passwordsMatchValidator// Agregar el validador personalizado
    });
  }

  ngOnInit() {
    //this.onSubmit();
  }

  addPaciente() {
    if (this.myForm.valid) {
      // Configura el encabezado Content-Type como application/json
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      // Envía la solicitud POST con el encabezado configurado
      this.restApi.addPaciente(this.myForm.value, httpOptions).subscribe((data: {}) => {
        Swal.fire('Éxito', 'El paciente se ha registrado correctamente', 'success');
        this.router.navigate(['/paciente-list']);
      });
    } else {
      Swal.fire('Error', 'No se pudo hacer el registro, inténtelo nuevamente');
      this.myForm.reset();

      console.log('Por favor, complete todos los campos correctamente.');
    }
  }
  
  
}