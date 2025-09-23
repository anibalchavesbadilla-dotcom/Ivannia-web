import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common'; 

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

 

}
