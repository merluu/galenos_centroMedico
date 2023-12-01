import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { ServicioReservaService } from 'src/app/services/servicio-reserva.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rut-cancelar-reserva',
  templateUrl: './rut-cancelar-reserva.component.html',
  styleUrls: ['./rut-cancelar-reserva.component.css']
})
export class RutCancelarReservaComponent {
  cancelarForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, public restfullApi: ServicioReservaService) {
    this.cancelarForm = this.formBuilder.group({
      run_paciente: ['', [Validators.required, Validators.pattern(/^\d{7,8}-[0-9K]$/)]],
    });
  }



  

  cancelReserva() {
    if (this.cancelarForm.valid) {
      const rut = this.cancelarForm.value.run_paciente;
      
      // Rut válido, redirigir a otra página con el Rut en la URL
      console.log('Rut válido:', rut);
      this.router.navigate([`/cancelar-reserva-paciente/${rut}`]);
    } else {
      Swal.fire('Error', 'Por favor, complete todos los campos correctamente', 'error');
    }
  }

  //modificarMedico(reserva: Reserva) {
    //const rut = reserva.run_paciente; 
    //this.router.navigate([`/medico-modificar/${rut}`]);
  //}

  validarRut(control: { value: string }): { [key: string]: boolean } | null {
    const rut = control.value;
    if (!rut) {
      return null; // Corregir aquí
    }
  
    let rutNumerico = rut.replace(".", "").replace("-", "").toUpperCase();
    const verificador = rutNumerico.slice(-1);
    rutNumerico = rutNumerico.slice(0, -1);
  
    if (rutNumerico.length < 7) {
      return { 'invalidRut': true }; // Corregir aquí
    }
  
    let suma = 0;
    let multiplo = 2;
  
    for (let i = rutNumerico.length - 1; i >= 0; i--) {
      suma += +rutNumerico[i] * multiplo;
      multiplo = multiplo + 1 < 7 ? multiplo + 1 : 2;
    }
  
    let resultado: string | number = 11 - (suma % 11);
    resultado = resultado === 11 ? "0" : resultado === 10 ? "K" : resultado.toString();
  
    return resultado === verificador ? null : { 'invalidRut': true }; // Corregir aquí
}

}
