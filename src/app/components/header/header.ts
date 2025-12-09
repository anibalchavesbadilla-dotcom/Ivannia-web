import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DbService } from '../../services/db.service';
import { Router } from '@angular/router';

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
  whatsApp: any;
  gCalendar: any;
  private db = inject(DbService);
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.title = this.db.data.header.name
    this.IconUrl = this.db.data.header.logo.replace("&dl=0","&raw=1")
    this.servicios = this.db.data.servicios
    this.proyectos = this.db.data.proyectos
    this.whatsApp = this.db.data.header.whatsApp
    this.gCalendar = this.db.data.header.gCalendar
  }


  goTo(item:any){
    localStorage.setItem('datosRC', JSON.stringify(item));
    this.router.navigate(['/Rutas-Conexiones']).then(() => {
      window.location.reload();
    });
  }

}
