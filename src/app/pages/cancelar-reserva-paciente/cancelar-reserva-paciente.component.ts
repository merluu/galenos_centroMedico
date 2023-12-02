import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Reserva } from 'src/app/interface/reserva';
import { ServicioReservaService } from 'src/app/services/servicio-reserva.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cancelar-reserva-paciente',
  templateUrl: './cancelar-reserva-paciente.component.html',
  styleUrls: ['./cancelar-reserva-paciente.component.css']
})
export class CancelarReservaPacienteComponent {
  reservas: Reserva[] = [];
  run_paciente: string; 
  selectedReserva: Reserva | null = null;
  disponibilidadSeleccionada: string; 

  constructor(private router: Router,public restApi: ServicioReservaService, private route: ActivatedRoute) {
    this.run_paciente = this.route.snapshot.params['rut'];
    this.disponibilidadSeleccionada = '';
  
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    
      
      if (this.run_paciente !== null) {
        this.cargarReservas();
      } else {
        console.error('Los parámetros run_paciente son nulos.');
      }
    });
}

  seleccionarReserva(reserva: Reserva) {
    this.selectedReserva = reserva;
  }

  cargarReservas() {
    this.restApi
      . obtenerReservaPorRunPaciente(this.run_paciente)
      .subscribe(
        (data) => {
          this.reservas = data;
        },
        (error) => {
          console.error('Error al cargar los médicos', error);
        }
      );
  }

  getHoraPorIdBloque(idBloque: string): string {
    switch (idBloque) {
        case '1':
            return '09:00-09:59';
        case '2':
            return '10:00-10:59';
        case '3':
            return '11:00-11:59';
        case '4':
              return '12:00-12:59';
        case '5':
              return '13:00-13:59';
        case '6':
              return '14:00-14:59';
        case '7':
              return '15:00-15:59';
        case '8':
              return '16:00-16:59';
        case '9':
              return '17:00-17:59';
        case '10':
              return '18:00-18:59';
        case '11':
              return '19:00-20:00';
        default:
            return '';
    }
}

cancelarReserva() {
  if (this.selectedReserva) {
      const { id_bloque_disponibilidad, fecha_disponibilidad, run_medico_disponibilidad, run_paciente } = this.selectedReserva;

      Swal.fire({
          title: 'Reserva A Cancelar',
          html: `
              <strong>ID Bloque Reserva:</strong> ${id_bloque_disponibilidad}<br>
              <strong>Fecha Reserva:</strong> ${fecha_disponibilidad}<br>
              <strong>Run Médico:</strong> ${run_medico_disponibilidad}<br>
              <strong>Run Paciente:</strong> ${run_paciente}<br>
          `,
          icon: 'warning',
          showCancelButton: true,  
          confirmButtonText: 'OK', 
          cancelButtonText: 'Cancelar' 
      }).then((result) => {
          if (result.isConfirmed) {
              // Si el usuario hace clic en OK, realiza la cancelación de la reserva
              
              this.realizarCancelacion();  
          }
      });
  } else {
      // Muestra un mensaje si no hay reserva seleccionada
      Swal.fire('Error', 'Por favor, seleccione una reserva para cancelar', 'error');
  }
}

//realiza la cancelación
realizarCancelacion() {
  // Agrega aquí el código para realizar la cancelación de la reserva
  // Puedes hacer una llamada a tu servicio para realizar la anulación
  // y manejar cualquier lógica adicional necesaria
  Swal.fire('Cancelada', 'La reserva ha sido cancelada', 'success');
}

}
