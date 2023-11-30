import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Medico } from 'src/app/interface/medico'; 
import { ServicioMedicoService } from '../../services/servicio-medico.service';
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
  runMedico: string;  

  constructor(private router: Router, public restApi: ServicioMedicoService , private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
    this.runMedico = this.route.snapshot.params['rut'];
    this.myForm = this.formBuilder.group({
      run_medico: [this.runMedico], 
      fecha: ['', Validators.required], 
      id_bloque: ['', Validators.required]
      
    });
  }


  ngOnInit() {
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




}
