import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { ServicioReservaService } from '../../services/servicio-reserva.service';


@Component({
  selector: 'app-centro-especialidad',
  templateUrl: './centro-especialidad.component.html',
  styleUrls: ['./centro-especialidad.component.css']
})
export class CentroEspecialidadComponent  implements OnInit{
  myForm: FormGroup; // Agrega la propiedad myForm de tipo FormGroup

  constructor(private router: Router, public restApi: ServicioReservaService, private formBuilder: FormBuilder){
    this.myForm = this.formBuilder.group({
      id_centro: ['', Validators.required],
      id_especialidad: ['', Validators.required]
    });
  }






  ngOnInit() {
  }


  buscarcentroXespecialidad() {
    if (this.myForm.valid) {
       //Configura el encabezado Content-Type como application/json
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      // Envía la solicitud POST con el encabezado configurado
      this.restApi.buscarcentroXespecialidad(this.myForm.value, httpOptions).subscribe(
        (data: {}) => {
          Swal.fire('Éxito', 'ok, vamos bien.....', 'success')
            .then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/medico-list']);
              }
            });
        },
        (error) => {
          console.log('el centro y la especialidad no coinciden', error);
          Swal.fire('Error', 'No existe la especialidad en el centro Médico, inténtelo nuevamente', 'error');
        }
      );
    } else {
      Swal.fire('Error', 'Por favor, complete todos los campos correctamente', 'error');
    }
  }

}
