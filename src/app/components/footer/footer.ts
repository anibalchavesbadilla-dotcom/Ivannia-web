import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetInformationDataService } from '../get-information-data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [NgFor],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {
  title: any;
  servicios: any[] = [];
  proyectos: any[] = [];
  whatsApp: any;
  gCalendar: any;
  year:any;

  constructor(private data:GetInformationDataService) {}

  ngOnInit(): void {
    this.title = this.data.datos.header.name
    this.whatsApp = this.data.datos.header.whatsApp
    this.gCalendar = this.data.datos.header.gCalendar
    this.servicios = this.data.datos.servicios
    this.proyectos = this.data.datos.proyectos
    this.year = new Date().getFullYear();
  }

  goTo(item:any){
    localStorage.setItem('datosRC', JSON.stringify(item));
    window.open('/Rutas-Conexiones', '_blank');
  }

  goToP(item:any){
    localStorage.setItem('datosPJ', JSON.stringify(item));
    window.open('/Projeto', '_blank');
  }

}
