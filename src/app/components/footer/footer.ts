import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {
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
