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
    const rut = paciente.run_paciente; 
    this.router.navigate([`/paciente-modificar/${rut}`]);
  }
  
}


