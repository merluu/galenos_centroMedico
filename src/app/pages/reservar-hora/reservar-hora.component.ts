import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Medico } from 'src/app/interface/medico'; 
import { ServicioMedicoService } from 'src/app/services/servicio-medico.service'; 
//import { Disponibilidad } from 'src/app/interface/disponibilidad';
import {MedicoDisponibilidad} from 'src/app/interface/medico-disponibilidad';

@Component({
  selector: 'app-reservar-hora',
  templateUrl: './reservar-hora.component.html',
  styleUrls: ['./reservar-hora.component.css']
})
export class ReservarHoraComponent implements OnInit {
  disponibilidades: MedicoDisponibilidad[] = [];
  runMedico: string = '';
  nombresMedico: string = '';
  apePaternoMedico: string = '';

  constructor(private route: ActivatedRoute, public restApi: ServicioMedicoService) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.runMedico = params.get('run_medico') || '';
      this.nombresMedico = params.get('nombres') || '';
      this.apePaternoMedico = params.get('ape_paterno') || '';
    });
    this.loadMedicoxDisponibilidad()


  }

  loadMedicoxDisponibilidad(){
    this.restApi
        .obtenerDisponibilidadPorRunMedico(this.runMedico)
        .subscribe((data) => {
          this.disponibilidades = data;
        });
      }

}
