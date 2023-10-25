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
    const rut = medico.run_medico; // Obtener el rut del paciente
    this.router.navigate([`/medico-modificar/${rut}`]);
  }

  agregarMedico() {
    // Aquí puedes realizar alguna acción, como la navegación a la página de edición
    // Puedes usar el router para navegar a otra ruta y pasar el ID del paciente a editar, por ejemplo
    this.router.navigate(['/medico-agregar']);
  }


}


  
  

