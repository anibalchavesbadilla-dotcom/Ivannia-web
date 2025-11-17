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
  IconUrl: string = 'https://www.dropbox.com/scl/fi/sm7xvatocj8kitm9fa70h/ico.png?rlkey=umxq0btxzkhb717za60fjhnk0&st=zczpgqyd&raw=1';
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
  }

  ngOnDestroy(): void {
  }



}
