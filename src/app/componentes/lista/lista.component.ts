import { Component, OnInit } from '@angular/core';
import { Estudiante } from './estudiante.model';
import { AccederService } from '../../services/acceder.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent  {
  
  estudiantes: any[] = [];
  constructor(private accederService: AccederService){
    this.Cargar();
  }

  est: Estudiante = {
    est_cedula: '',
    est_nombre: '',
    est_apellido: '',
    est_telefono: '',
    est_direccion: ''
  };
  Cargar(){
    this.accederService.acceder().subscribe(estudiantes => {
      this.estudiantes=estudiantes;
        console.log(this.estudiantes);
      });
  }
}
