import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetInformationDataService } from '../../../../components/get-information-data.service';

@Component({
  selector: 'app-top-carousel',
  imports: [CommonModule],
  templateUrl: './top-carousel.html',
  styleUrl: './top-carousel.css'
})
export class TopCarousel implements OnInit {
  proyectos: any[] | undefined;

  constructor(private data:GetInformationDataService){}

  ngOnInit(): void {
    this.proyectos = this.data.datos.proyectos
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
