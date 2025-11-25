import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TopCarousel } from "./top-carousel/top-carousel";
import { TopPageCards } from "./top-page-cards/top-page-cards";
import { GetInformationDataService } from '../../../components/get-information-data.service';

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



  constructor(private data:GetInformationDataService) {}

  ngOnInit(): void {
    this.title = this.data.datos.home.title
    this.des = this.data.datos.home.description

    this.qSomosTitulo = this.data.datos.home.qSomosTitulo
    this.qSomosDes = this.data.datos.home.qSomosDes
    this.clientesTitulo = this.data.datos.home.clientesTitulo
    this.clientesDes = this.data.datos.home.clientesDes
    this.rutasTitulo = this.data.datos.home.rutasTitulo
    this.rutasDes = this.data.datos.home.rutasDes

    this.qstitulo = this.data.datos.QuienSoy.titulo
    this.qsdescription = this.data.datos.QuienSoy.description
    this.qsimgUrl = this.data.datos.QuienSoy.imgUrl.replace('&dl=0','&raw=1')

    this.whatsApp = this.data.datos.header.whatsApp


  }

}
