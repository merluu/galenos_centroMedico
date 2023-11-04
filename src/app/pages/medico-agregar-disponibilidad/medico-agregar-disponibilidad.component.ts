import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Medico } from 'src/app/interface/medico'; 
import { ServicioMedicoService } from '../../services/servicio-medico.service';
import { HttpHeaders } from '@angular/common/http'; 
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medico-agregar-disponibilidad',
  templateUrl: './medico-agregar-disponibilidad.component.html',
  styleUrls: ['./medico-agregar-disponibilidad.component.css']
})
export class MedicoAgregarDisponibilidadComponent implements OnInit {
  myForm: FormGroup; // Agrega la propiedad myForm de tipo FormGroup
  runMedico: string;  // Define el atributo runMedico

  constructor(private router: Router, public restApi: ServicioMedicoService , private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
    this.runMedico = this.route.snapshot.params['rut'];
    this.myForm = this.formBuilder.group({
      run_medico: [this.runMedico], 
      fecha: ['', Validators.required],
      id_bloque: ['', Validators.required]
      // Define tus campos y validaciones aquí
    });
  }

  ngOnInit() {
  }

  addDisponibilidad() {
  if (this.myForm.valid) {
    // Configura el encabezado Content-Type como application/json
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // Envía la solicitud POST con el encabezado configurado
    this.restApi.addDisponibilidad(this.myForm.value, httpOptions).subscribe(
      (data: {}) => {
        Swal.fire('Éxito', 'La disponibilidad se ha agregado correctamente', 'success')
          .then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/medico-list']);
            }
          });
      },
      (error) => {
        console.log('error al agregar disponibilidad del médico', error);
        Swal.fire('Error', 'No se pudo agregar la Disponibilidad, inténtelo nuevamente', 'error');
      }
    );
  } else {
    Swal.fire('Error', 'Por favor, complete todos los campos correctamente', 'error');
  }
}


}
