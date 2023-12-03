import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Medico } from 'src/app/interface/medico'; 
import { ServicioMedicoService } from '../../services/servicio-medico.service';
import {MedicoDisponibilidad} from 'src/app/interface/medico-disponibilidad';
import { HttpHeaders } from '@angular/common/http'; 
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medico-cancelar-disponibilidad',
  templateUrl: './medico-cancelar-disponibilidad.component.html',
  styleUrls: ['./medico-cancelar-disponibilidad.component.css']
})
export class MedicoCancelarDisponibilidadComponent implements OnInit {
  myForm: FormGroup; 
  disponibilidades: MedicoDisponibilidad[] = [];
  runMedico: string = '';
  nombresMedico: string = '';
  apePaternoMedico: string = '';
  disponibilidadSeleccionada: number = 0;
  disponibilidadesLoading: boolean = true;

  constructor(private router: Router, public restApi: ServicioMedicoService , private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
    this.runMedico = this.route.snapshot.params['rut'];
    this.nombresMedico = this.route.snapshot.params['nombres'];
    this.apePaternoMedico = this.route.snapshot.params['ape_paterno'];
    this.myForm = this.formBuilder.group({
      run_medico: [this.runMedico], 
      fecha: ['', Validators.required], 
      id_bloque: ['', Validators.required]
      
    });
  }


  ngOnInit() {
    this.loadMedicoxDisponibilidad();
  }

  loadMedicoxDisponibilidad(){
    this.restApi
        .obtenerDisponibilidadPorRunMedico(this.runMedico)
        .subscribe((data) => {
          this.disponibilidades = data;
          this.disponibilidadesLoading = false; 
        if (this.disponibilidades.length === 0) {
          Swal.fire('No hay disponibilidades', 'No hay disponibilidades para este médico en este momento', 'error').then(() => {
            //this.router.navigate(['/medico-list-centro-espe']); // Redirige a la página de reserva
          });
        }
      },
      (error) => {
        console.log('error al cargar las disponibilidades', error);
        this.disponibilidadesLoading = false; 
        Swal.fire('Error', 'No se pudieron cargar las disponibilidades, inténtelo nuevamente', 'error');
        this.router.navigate(['/centro-especialidad']); 
      }
    );
}

  cancelDisponibilidad() {
    if (this.myForm.valid) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
  
      this.restApi.quitarDisponibilidad(this.myForm.value, httpOptions).subscribe(
        (data: {}) => {
          Swal.fire('Éxito', 'La disponibilidad se ha cancelado correctamente', 'success')
            .then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/medico-list']);
              }
            });
        },
        (error) => {
          console.log('error al cancelar la disponibilidad del médico', error);
          Swal.fire('Error', 'No se pudo cancelar la Disponibilidad, inténtelo nuevamente', 'error');
        }
      );
    } else {
      Swal.fire('Error', 'Por favor, complete todos los campos correctamente', 'error');
    }
  }

  setSeleccion(disponibilidad: MedicoDisponibilidad) {
    const idBloqueControl = this.myForm.get('id_bloque');
    const fechaDisponibilidadControl = this.myForm.get('fecha');
    if (idBloqueControl && fechaDisponibilidadControl) {
      idBloqueControl.setValue(disponibilidad.id_bloque);
      fechaDisponibilidadControl.setValue(disponibilidad.fecha);
    }

  }




}
