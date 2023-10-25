import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/interface/medico';
import {ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicioMedicoService } from 'src/app/services/servicio-medico.service'; 
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-medico-modificar',
  templateUrl: './medico-modificar.component.html',
  styleUrls: ['./medico-modificar.component.css']
})
export class MedicoModificarComponent implements OnInit{
  myForm: FormGroup; // Agrega la propiedad myForm de tipo FormGroup
  rutParametro: string = '';
  medico: Medico = {} as Medico;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private restApi: ServicioMedicoService
    ){
      this.route.params.subscribe((params) => {
        this.rutParametro = params['rut'];
      });
      this.myForm = this.formBuilder.group({
        run_medico: [{ value: '' }], 
        nombres: ['', Validators.required],
        ape_paterno: ['', Validators.required],
        ape_materno: ['', Validators.required],
        telefono: [''],
        comuna: [''],
        direccion: [''],
        correo: [{ value: '' }], 
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
      this.restApi.updateMedico(this.myForm.value, httpOptions).subscribe((data: {}) => {
        this.router.navigate(['/medico-list']);
      });
    } else {
      console.log('Por favor, complete todos los campos correctamente.');
    }
  }


  ngOnInit() {
    this.restApi.getMedicoPorRut(this.rutParametro).subscribe((data: Medico) => {
      this.medico = data;
      const elementoRut = document.getElementById('parrafoRutId');
      const elementoCorreo = document.getElementById('parrafoCorreoId');
      if (elementoCorreo) {
        elementoCorreo.textContent = "Correo: "+this.medico.correo;
      }
      if (elementoRut) {
        elementoRut.textContent = "Rut: "+this.medico.run_medico;
      }
      this.myForm.patchValue({
        run_medico: this.medico.run_medico,
        nombres: this.medico.nombres,
        ape_paterno: this.medico.ape_paterno,
        ape_materno: this.medico.ape_materno,
        telefono: this.medico.telefono,
        comuna: this.medico.comuna,
        direccion: this.medico.direccion,
        correo: this.medico.correo,
      });
    });
    
  }

}