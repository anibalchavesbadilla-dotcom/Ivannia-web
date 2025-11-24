import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rutas-conexiones',
  imports: [],
  templateUrl: './rutas-conexiones.html',
  styleUrl: './rutas-conexiones.css'
})
export class RutasConexiones implements OnInit {
  Titulo:string = "Titulo"
  SubTitulo:string = "Sub-Titulo"
  DescripcionHTML:string = "Descripcion"
  PhotoURL:string = ""
  constructor(){}

  ngOnInit(): void {
    const data = localStorage.getItem('datosRC');
    let dataRC = JSON.parse(data || '{}');
    this.Titulo = dataRC.title
    this.SubTitulo = dataRC["sub-title"]
    this.DescripcionHTML = dataRC.description
    this.PhotoURL = dataRC.Imagen.replace("&dl=0","&raw=1")
  }
}
