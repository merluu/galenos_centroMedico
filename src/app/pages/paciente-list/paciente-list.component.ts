import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioPacienteService } from '../../services/servicio-paciente.service';
import { Paciente } from 'src/app/interface/paciente'; 

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit{

  paciente: Paciente[] = [];
  constructor(private router: Router,public restApi: ServicioPacienteService) {}

  ngOnInit() {
    this.loadPacientes();
  }

  // Get employees list
  loadPacientes() {
    this.restApi.getPacientes().subscribe((data) => {
      this.paciente = data;
    });
  }

  modificarPaciente(paciente: Paciente) {
    // Aquí puedes realizar alguna acción, como la navegación a la página de edición
    // Puedes usar el router para navegar a otra ruta y pasar el ID del paciente a editar, por ejemplo
    this.router.navigate(['/paciente-modificar', paciente.run_paciente]);
  }
}


