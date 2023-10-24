import { Component, OnInit } from '@angular/core';
import { ServicioPacienteService } from '../../services/servicio-paciente.service';
import { Paciente } from 'src/app/interface/paciente'; 

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css']
})
export class PacienteListComponent implements OnInit{

  paciente: Paciente[] = [];
  constructor(public restApi: ServicioPacienteService) {}

  ngOnInit() {
    this.loadPacientes();
  }

  // Get employees list
  loadPacientes() {
    this.restApi.getPacientes().subscribe((data) => {
      this.paciente = data;
    });
  }
}
