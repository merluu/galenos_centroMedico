import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Reserva } from 'src/app/interface/reserva';
import { ServicioReservaService } from 'src/app/services/servicio-reserva.service';

@Component({
  selector: 'app-cancelar-reserva-paciente',
  templateUrl: './cancelar-reserva-paciente.component.html',
  styleUrls: ['./cancelar-reserva-paciente.component.css']
})
export class CancelarReservaPacienteComponent {
  reservas: Reserva[] = [];
  run_paciente: string; 
  selectedReserva: Reserva | null = null;

  constructor(private router: Router,public restApi: ServicioReservaService, private route: ActivatedRoute) {
    this.run_paciente = this.route.snapshot.params['rut'];
  
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

}
