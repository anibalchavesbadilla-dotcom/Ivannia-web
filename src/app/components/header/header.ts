import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgFor],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit, OnDestroy {
  title: any;
  titledes: any;
  servicios: any[] = [];
  proyectos: any[] = [];
  gifUrl: string = 'https://www.dropbox.com/scl/fi/bfjp33fcjben0uhs64gz9/video-to-gif-converter.gif?rlkey=byjwl44nm35x5z0o5efn999sg&st=b5s9wtq5&raw=1';
  private loopInterval: any;
  private gifDurationMs: number = 10000;
  constructor(private httpClient:HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get("https://ivannia-miller-vasquez-default-rtdb.firebaseio.com/DatosPage.json").subscribe((datos:any)=>{
      this.title = datos.Name
      this.titledes = datos.NameDes
    })

    this.httpClient.get("https://ivannia-miller-vasquez-default-rtdb.firebaseio.com/Servicios.json").subscribe((servicios:any)=>{
      this.servicios = servicios.filter((f:any) => f);
    })

    this.httpClient.get("https://ivannia-miller-vasquez-default-rtdb.firebaseio.com/Proyectos.json").subscribe((proyectos:any)=>{
      this.proyectos = proyectos.filter((f:any) => f);
    })
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
