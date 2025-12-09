import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TopCarousel } from "./top-carousel/top-carousel";
import { TopPageCards } from "./top-page-cards/top-page-cards";
import { DbService } from '../../../services/db.service';

@Component({
  selector: 'app-top-page',
  imports: [MatButtonModule, TopCarousel, TopPageCards],
  templateUrl: './top-page.html',
  styleUrl: './top-page.css'
})
export class TopPage implements OnInit {
  title: any;
  des: any;

  qSomosTitulo: any;
  qSomosDes: any;
  clientesTitulo: any;
  clientesDes: any;
  rutasTitulo: any;
  rutasDes: any;

  qstitulo: any;
  qsdescription: any;
  qsimgUrl: any;

  whatsApp:any;
  private db = inject(DbService);

  ngOnInit(): void {
    this.title = this.db.data.home.title
    this.des = this.db.data.home.description

    this.qSomosTitulo = this.db.data.home.qSomosTitulo
    this.qSomosDes = this.db.data.home.qSomosDes
    this.clientesTitulo = this.db.data.home.clientesTitulo
    this.clientesDes = this.db.data.home.clientesDes
    this.rutasTitulo = this.db.data.home.rutasTitulo
    this.rutasDes = this.db.data.home.rutasDes

    this.qstitulo = this.db.data.QuienSoy.titulo
    this.qsdescription = this.db.data.QuienSoy.description
    this.qsimgUrl = this.db.data.QuienSoy.imgUrl.replace('&dl=0','&raw=1')

    this.whatsApp = this.db.data.header.whatsApp


  }

}
