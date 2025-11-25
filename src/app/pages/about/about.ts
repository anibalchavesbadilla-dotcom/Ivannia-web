import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GetInformationDataService } from '../../components/get-information-data.service';

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

  constructor(private data:GetInformationDataService){}

  ngOnInit(): void {
    this.titulo = this.data.datos.about.titulo
    this.description = this.data.datos.about.description
    this.imgUrl = this.data.datos.about.imgUrl
    this.misionImg = this.data.datos.about.misionImg
    this.mision = this.data.datos.about.mision
    this.visionImg = this.data.datos.about.visionImg
    this.vision = this.data.datos.about.vision

    this.nValoresTitulo = this.data.datos.NuestrosValores.titulo
    this.gifUrl = this.data.datos.NuestrosValores.gifUrl
    this.valores = this.data.datos.NuestrosValores.valores

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
