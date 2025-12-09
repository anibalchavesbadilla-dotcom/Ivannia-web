import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-about',
  imports: [MatIconModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit, OnDestroy{
  gifUrl: string = '';
  private loopInterval: any;
  private gifDurationMs: number = 10000;

  titulo: any;
  description: any;
  imgUrl: any;
  misionImg: any;
  mision: any;
  visionImg: any;
  vision: any;
  nValoresTitulo: any;
  valores: any;

  private db = inject(DbService);

  ngOnInit(): void {
    this.titulo = this.db.data.about.titulo
    this.description = this.db.data.about.description
    this.imgUrl = this.db.data.about.imgUrl
    this.misionImg = this.db.data.about.misionImg
    this.mision = this.db.data.about.mision
    this.visionImg = this.db.data.about.visionImg
    this.vision = this.db.data.about.vision

    this.nValoresTitulo = this.db.data.NuestrosValores.titulo
    this.gifUrl = this.db.data.NuestrosValores.gifUrl
    this.valores = this.db.data.NuestrosValores.valores

    this.startGifLoop();
  }

  startGifLoop(): void {
    const originalUrl = this.gifUrl;

    this.loopInterval = setInterval(() => {
      this.gifUrl = originalUrl + '&t=' + new Date().getTime();

    }, this.gifDurationMs);
  }

  ngOnDestroy(): void {
    if (this.loopInterval) {
      clearInterval(this.loopInterval);
    }
  }
}
