import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Medico } from 'src/app/interface/medico';  
import { ServicioMedicoService } from 'src/app/services/servicio-medico.service'; 

@Component({
  selector: 'app-medico-list-centro-espe',
  templateUrl: './medico-list-centro-espe.component.html',
  styleUrls: ['./medico-list-centro-espe.component.css']
})
export class MedicoListCentroEspeComponent implements OnInit{

  medicos: Medico[] = [];
  centroId: number= 0;  // Variable para almacenar el valor del centroId
  especialidadId: number= 0;  // Variable para almacenar el valor del especialidadId
  selectedMedico: Medico | null = null;


  constructor(private router: Router,public restApi: ServicioMedicoService, private route: ActivatedRoute) {
  
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const centroIdParam = params.get('centroId');
      const especialidadIdParam = params.get('especialidadId');
      
      if (centroIdParam !== null && especialidadIdParam !== null) {
        this.centroId = +centroIdParam;
        this.especialidadId = +especialidadIdParam;
        this.cargarMedicos();
      } else {
        console.error('Los parámetros centroId o especialidadId son nulos.');
      }
    });
}

  cargarMedicos() {
    this.restApi
      .traeMedicosPorCentroEspecialidad(this.centroId, this.especialidadId)
      .subscribe(
        (data) => {
          this.medicos = data;
        },
        (error) => {
          console.error('Error al cargar los médicos', error);
        }
      );
  }

  seleccionarMedico(medico: Medico) {
    this.selectedMedico = medico;
  }

  redirigirSiSeleccionado() {
    if (this.selectedMedico) {
      const run_medico = this.selectedMedico.run_medico;
      const nombres = this.selectedMedico.nombres;
      const ape_paterno = this.selectedMedico.ape_paterno;
      // Redirige a otra página aquí, por ejemplo:
      this.router.navigate(['reservar-hora/',run_medico, nombres, ape_paterno]);
    }
  }


}
