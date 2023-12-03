import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Reserva } from 'src/app/interface/reserva';
import { ServicioReservaService } from 'src/app/services/servicio-reserva.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http'; 
import { CancelarReservaReq } from 'src/app/interface/cancelar-reserva-req';

@Component({
  selector: 'app-cancelar-reserva-paciente',
  templateUrl: './cancelar-reserva-paciente.component.html',
  styleUrls: ['./cancelar-reserva-paciente.component.css']
})
export class CancelarReservaPacienteComponent {
  reservas: Reserva[] = [];
  cancelarReservaReq: CancelarReservaReq| null = null;
  run_paciente: string; 
  selectedReserva: Reserva | null = null;
  disponibilidadSeleccionada: string; 
  loadingReservas: boolean = true; // Inicialmente, establecido en true

  constructor(private router: Router,public restApi: ServicioReservaService, private route: ActivatedRoute) {
    this.run_paciente = this.route.snapshot.params['rut'];
    this.disponibilidadSeleccionada = '';
    this.cancelarReservaReq =null;
  
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
          //this.loadingReservas = false; // La carga se ha completado
        },
        (error) => {
          console.error('Error al cargar las reservas', error);
        }
        )
    .add(() => {
      this.loadingReservas = false; // Se ejecutará tanto en caso de éxito como en caso de error
    });
}
  
cancelarReserva() {
  if (this.selectedReserva) {
      const { id_bloque_disponibilidad, fecha_disponibilidad, run_medico_disponibilidad, run_paciente } = this.selectedReserva;

    this.cancelarReservaReq = {
      run_medico: run_medico_disponibilidad,
      fecha: fecha_disponibilidad, 
      id_bloque: id_bloque_disponibilidad, 
      
    };

    console.log("se construye el objeto",this.cancelarReservaReq)
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
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  this.restApi.anularReserva(this.cancelarReservaReq, httpOptions )
      .subscribe(
        (data) => {
        console.log("reserva ok")
        Swal.fire('Cancelada', 'La reserva ha sido cancelada exitosamente', 'success');
        this.router.navigate(['']); 
        },
        (error) => {
          console.error('Error no se puede cancelar la reserva', error);
          Swal.fire('Error', 'No se pudo cancelar la reserva. Inténtelo de nuevo más tarde.', 'error');
        }
      );
}

}
