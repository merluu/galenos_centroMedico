import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Medico } from 'src/app/interface/medico';
import { HttpHeaders } from '@angular/common/http';
import { passwordsMatchValidator } from '../../components/custom-validator';
import { ServicioMedicoService } from '../../services/servicio-medico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medico-agregar',
  templateUrl: './medico-agregar.component.html',
  styleUrls: ['./medico-agregar.component.css']
})
export class MedicoAgregarComponent implements OnInit {
  myForm: FormGroup;

  constructor(private router: Router, public restApi: ServicioMedicoService, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      run_medico: ['', Validators.required],
      nombres: ['', Validators.required],
      ape_paterno: ['', Validators.required],
      ape_materno: ['', Validators.required],
      telefono: [''],
      comuna: [''],
      direccion: [''],
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', Validators.required],
      contrasenia2: ['', Validators.required],
      id_centro: ['', Validators.required],
      id_especialidad: ['', Validators.required]
    }, {
      validator: passwordsMatchValidator// Agregar el validador personalizado
    });
  }

  ngOnInit() {
    //this.onSubmit();
  }

  addMedico() {
    if (this.myForm.valid) {
      // Configura el encabezado Content-Type como application/json
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      // Envía la solicitud POST con el encabezado configurado
      this.restApi.addMedico(this.myForm.value, httpOptions).subscribe(
        (data: {}) => {
          Swal.fire('Éxito', 'El médico se ha registrado correctamente', 'success')
            .then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/medico-list']);
              }
            });
        },
        (error) => {
          console.log('error al agregar el médico', error);
          Swal.fire('Error', 'No se pudo registrar el médico, inténtelo nuevamente', 'error');
        }
      );
    } else {
      Swal.fire('Error', 'Por favor, complete todos los campos correctamente', 'error');
    }
  }
  

}

