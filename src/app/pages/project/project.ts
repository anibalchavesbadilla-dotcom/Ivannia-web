import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
  Titulo:string = "Titulo"
  SubTitulo:string = "Sub-Titulo"
  DescripcionHTML:string = "Descripcion"
  PhotoURL:string = ""
  constructor(){}

  ngOnInit(): void {
    const data = localStorage.getItem('datosPJ');
    let dataRC = JSON.parse(data || '{}');
    this.Titulo = dataRC.title
    this.SubTitulo = dataRC["sub-title"]
    this.DescripcionHTML = dataRC.description
    this.PhotoURL = dataRC.iconUrl.replace("&dl=0","&raw=1")
  }
}
