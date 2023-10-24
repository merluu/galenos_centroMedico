import { Component } from '@angular/core';
import { Paciente } from 'src/app/interface/paciente';
import {ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicioPacienteService } from '../../services/servicio-paciente.service';

@Component({
  selector: 'app-paciente-modificar',
  templateUrl: './paciente-modificar.component.html',
  styleUrls: ['./paciente-modificar.component.css']
})
export class PacienteModificarComponent {
  myForm: FormGroup; // Agrega la propiedad myForm de tipo FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private restApi: ServicioPacienteService
  ) {
    this.myForm = this.formBuilder.group({
      run_paciente: [{ value: '', disabled: true }], 
      nombres: ['', Validators.required],
      ape_paterno: ['', Validators.required],
      ape_materno: ['', Validators.required],
      telefono: [''],
      comuna: [''],
      direccion: [''],
      correo: [{ value: '', disabled: true }], 
      contrasenia: ['', Validators.required],
    });
  }

  Modificar() {
    if (this.myForm.valid) {
      // Realiza la lógica de modificación aquí
      // this.restApi.modificarPaciente(this.myForm.value).subscribe((data: {}) => {
      //   this.router.navigate(['/paciente-list']);
      // });
    } else {
      console.log('Por favor, complete todos los campos correctamente.');
    }
  }

}
