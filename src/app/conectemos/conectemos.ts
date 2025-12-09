import { Component, inject } from '@angular/core';
import { DbService } from '../services/db.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conectemos',
  imports: [CommonModule],
  templateUrl: './conectemos.html',
  styleUrl: './conectemos.css',
})
export class Conectemos {

  proyectos:any = [];

  private db = inject(DbService);

  ngOnInit(): void {
    this.proyectos = [
      { title: 'Email', icon: 'bi bi-envelope-fill', url: 'mailto:'+this.db.data.footer.email },
      { title: 'Facebook', icon: 'bi bi-facebook', url: this.db.data.footer.facebook },
      { title: 'Instagram', icon: 'bi bi-instagram', url: this.db.data.footer.instagram },
      { title: 'LinkedIn', icon: 'bi bi-linkedin', url: this.db.data.footer.tiktok }
    ]
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
     window.open(item.url, '_blank');
  }

}
