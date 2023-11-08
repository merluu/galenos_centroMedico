import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioMedicoService } from 'src/app/services/servicio-medico.service'; 
import { Medico } from 'src/app/interface/medico';  


@Component({
  selector: 'app-medico-list',
  templateUrl: './medico-list.component.html',
  styleUrls: ['./medico-list.component.css']
})
export class MedicoListComponent implements OnInit {

  medico: Medico[] = [];

  constructor(private router: Router,public restApi: ServicioMedicoService) {}

  ngOnInit() {
    this.loadMedicos();
  }

  // Get employees list
  loadMedicos() {
    this.restApi.getMedicos().subscribe((data) => {
      this.medico = data;
    });
  }

  modificarMedico(medico: Medico) {
    const rut = medico.run_medico; 
    this.router.navigate([`/medico-modificar/${rut}`]);
  }

  disponibilidadMedico(medico: Medico) {
    const rut = medico.run_medico; 
    this.router.navigate([`/medico-agregar-disponibilidad/${rut}`]);
  }

  agregarMedico() {
    this.router.navigate(['/medico-agregar']);
  }


}


  
  

