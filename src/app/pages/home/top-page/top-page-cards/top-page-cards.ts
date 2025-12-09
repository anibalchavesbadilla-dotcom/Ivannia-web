import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DbService } from '../../../../services/db.service';

@Component({
  selector: 'app-top-page-cards',
  imports: [CommonModule],
  templateUrl: './top-page-cards.html',
  styleUrl: './top-page-cards.css'
})
export class TopPageCards implements OnInit {
  servicios: any[] = [];
  private db = inject(DbService);

  ngOnInit(): void {
    this.servicios = this.db.data.servicios
  }

  goTo(item:any){
    localStorage.setItem('datosRC', JSON.stringify(item));
    window.open('/Rutas-Conexiones', '_blank');
  }
}
