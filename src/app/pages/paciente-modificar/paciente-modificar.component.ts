import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/interface/paciente';
import {ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicioPacienteService } from 'src/app/services/servicio-paciente.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-paciente-modificar',
  templateUrl: './paciente-modificar.component.html',
  styleUrls: ['./paciente-modificar.component.css']
})
export class PacienteModificarComponent implements OnInit {

  myForm: FormGroup; // Agrega la propiedad myForm de tipo FormGroup
  rutParametro: string = '';
  paciente: Paciente = {} as Paciente;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private restApi: ServicioPacienteService
  ) {
    this.route.params.subscribe((params) => {
      this.rutParametro = params['rut'];
    });
    this.myForm = this.formBuilder.group({
      run_paciente: [{ value: ''}], 
      nombres: ['', Validators.required],
      ape_paterno: ['', Validators.required],
      ape_materno: ['', Validators.required],
      telefono: [''],
      comuna: [''],
      direccion: [''],
      correo: [{ value: '' }], 
      contrasenia: ['', Validators.required],
    });
  }

  Modificar() {
    if (this.myForm.valid) {
      console.log("ENVIAR FORMULARIO");
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      // Envía la solicitud POST con el encabezado configurado
      this.restApi.updatePaciente(this.myForm.value, httpOptions).subscribe((data: {}) => {
        this.router.navigate(['/paciente-list']);
      });
    } else {
      console.log('Por favor, complete todos los campos correctamente.');
    }
  }

  ngOnInit() {
    this.restApi.getPacientePorRut(this.rutParametro).subscribe((data: Paciente) => {
      this.paciente = data;
      const elementoRut = document.getElementById('parrafoRutId');
      const elementoCorreo = document.getElementById('parrafoCorreoId');
      if (elementoCorreo) {
        elementoCorreo.textContent = "Correo: "+this.paciente.correo;
      }
      if (elementoRut) {
        elementoRut.textContent = "Rut: "+this.paciente.run_paciente;
      }
      this.myForm.patchValue({
        run_paciente: this.paciente.run_paciente,
        nombres: this.paciente.nombres,
        ape_paterno: this.paciente.ape_paterno,
        ape_materno: this.paciente.ape_materno,
        telefono: this.paciente.telefono,
        comuna: this.paciente.comuna,
        direccion: this.paciente.direccion,
        correo: this.paciente.correo,
        contrasenia: this.paciente.contrasenia
      });
    });
    
  }

}
