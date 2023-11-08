import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute  } from '@angular/router';
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
  myForm: FormGroup; 
  isFormValid: boolean = false;

  constructor(private router: Router, public restApi: ServicioReservaService, private formBuilder: FormBuilder,
    private route: ActivatedRoute){
    this.myForm = this.formBuilder.group({
      id_centro: ['', Validators.required],
      id_especialidad: ['', Validators.required]
    });
    
    this.myForm.valueChanges.subscribe(() => {
      this.isFormValid = this.myForm.valid;
    });
  }

  ngOnInit() {
  }

  buscarcentroXespecialidad() {
    if (this.myForm.valid) {
      const centroControl = this.myForm.get('id_centro');
      const especialidadControl = this.myForm.get('id_especialidad');
  
      if (centroControl && especialidadControl) {
        const centroId = centroControl.value;
        const especialidadId = especialidadControl.value;
  
        if (centroId !== null && especialidadId !== null) {
          this.router.navigate([`/medico-list-centro-espe/${centroId}/${especialidadId}`]);
        } else {
          Swal.fire('Error', 'Por favor, complete todos los campos correctamente', 'error');
        }
      } else {
        Swal.fire('Error', 'Por favor, complete todos los campos correctamente', 'error');
      }
    } else {
      Swal.fire('Error', 'Por favor, complete todos los campos correctamente', 'error');
    }
  }



}
