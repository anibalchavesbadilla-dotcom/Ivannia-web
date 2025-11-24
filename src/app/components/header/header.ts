import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { GetInformationDataService } from '../get-information-data.service';

@Component({
  selector: 'app-header',
  imports: [NgFor],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  title: any;
  titledes: any;
  servicios: any[] = [];
  proyectos: any[] = [];
  IconUrl: string = '';
  constructor(private data:GetInformationDataService) {}

  ngOnInit(): void {
    this.title = this.data.datos.header.name
    this.IconUrl = this.data.datos.header.logo.replace("&dl=0","&raw=1")
    this.servicios = this.data.datos.servicios
    this.proyectos = this.data.datos.proyectos
  }


  goTo(item:any){
    localStorage.setItem('datosRC', JSON.stringify(item));
    window.open('/Rutas-Conexiones', '_blank');
  }

}
