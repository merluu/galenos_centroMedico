import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Medico } from 'src/app/interface/medico'; 
import { ServicioMedicoService } from 'src/app/services/servicio-medico.service';
import { ServicioReservaService } from 'src/app/services/servicio-reserva.service'; 
import {MedicoDisponibilidad} from 'src/app/interface/medico-disponibilidad';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http'; 
import { Router } from '@angular/router'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservar-hora',
  templateUrl: './reservar-hora.component.html',
  styleUrls: ['./reservar-hora.component.css']
})
export class ReservarHoraComponent implements OnInit {
  reservaForm: FormGroup;
  disponibilidades: MedicoDisponibilidad[] = [];
  runMedico: string = '';
  nombresMedico: string = '';
  apePaternoMedico: string = '';
  disponibilidadSeleccionada: number = 0;
  disponibilidadesLoading: boolean = true;
  

  constructor(private route: ActivatedRoute, public restApi: ServicioMedicoService,private router: Router ,  private formBuilder: FormBuilder, public restfullApi: ServicioReservaService) { 
    this.reservaForm = this.formBuilder.group({
      run_medico_disponibilidad: ['', Validators.required],
      run_paciente: ['', Validators.required],
      correo_paciente: ['', [Validators.required, Validators.email]],
      metodo_pago: ['', Validators.required],
      valor_atencion: ['10000', Validators.required],
      id_bloque_disponibilidad: ['', Validators.required],
      fecha_disponibilidad: ['', Validators.required],

    });
  }


  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.runMedico = params.get('run_medico') || '';
    this.nombresMedico = params.get('nombres') || '';
    this.apePaternoMedico = params.get('ape_paterno') || '';
    const runMedicoControl = this.reservaForm.get('run_medico_disponibilidad');
    if (runMedicoControl) {
      runMedicoControl.setValue(this.runMedico);
    }
  });
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

      addReserva() {
        if (this.reservaForm.valid) {
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            })
          };
          this.restfullApi.addReserva(this.reservaForm.value, httpOptions).subscribe(
            (data: {}) => {
              Swal.fire('Éxito', 'La reserva se ha hecho correctamente', 'success')
                .then((result) => {
                  if (result.isConfirmed) {
                    this.router.navigate(['/']);
                  }
                });
            },
            (error) => {
              console.log('error al agregar la reserva', error);
              Swal.fire('Error', 'No se pudo registrar la reserva, inténtelo nuevamente', 'error');
            }
          );
        } else {
          Swal.fire('Error', 'Por favor, complete todos los campos correctamente', 'error');
        }
      }

      setSeleccion(disponibilidad: MedicoDisponibilidad) {
        const idBloqueControl = this.reservaForm.get('id_bloque_disponibilidad');
        const fechaDisponibilidadControl = this.reservaForm.get('fecha_disponibilidad');
        if (idBloqueControl && fechaDisponibilidadControl) {
          idBloqueControl.setValue(disponibilidad.id_bloque);
          fechaDisponibilidadControl.setValue(disponibilidad.fecha);
        }

      }
}
