import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DbService } from '../../../../services/db.service';

@Component({
  selector: 'app-top-carousel',
  imports: [CommonModule],
  templateUrl: './top-carousel.html',
  styleUrl: './top-carousel.css'
})
export class TopCarousel implements OnInit {
  proyectos: any[] | undefined;

  private db = inject(DbService);

  ngOnInit(): void {
    this.proyectos = this.db.data.proyectos
  }

  pause() {
    const track = document.querySelector('.slide-track') as HTMLElement;
    track.style.animationPlayState = 'paused';
  }

  play() {
    const track = document.querySelector('.slide-track') as HTMLElement;
    track.style.animationPlayState = 'running';
  }

  goTo(item: any) {
    localStorage.setItem('datosRC', JSON.stringify(item));
    window.open('/Rutas-Conexiones', '_blank');
  }
}
