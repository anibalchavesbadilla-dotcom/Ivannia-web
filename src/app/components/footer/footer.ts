import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DbService } from '../../services/db.service';

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
  footer:any

  private db = inject(DbService);

  ngOnInit(): void {
    this.title = this.db.data.header.name
    this.footer = this.db.data.footer
    this.whatsApp = this.db.data.header.whatsApp
    this.gCalendar = this.db.data.header.gCalendar
    this.servicios = this.db.data.servicios
    this.proyectos = this.db.data.proyectos
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
