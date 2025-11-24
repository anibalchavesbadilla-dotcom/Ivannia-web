import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetInformationDataService } from '../../../../components/get-information-data.service';

@Component({
  selector: 'app-top-page-cards',
  imports: [CommonModule],
  templateUrl: './top-page-cards.html',
  styleUrl: './top-page-cards.css'
})
export class TopPageCards implements OnInit {
  servicios: any[] = [];
  constructor(private data:GetInformationDataService){}

  ngOnInit(): void {
    this.servicios = this.data.datos.servicios
  }

  goTo(item:any){
    localStorage.setItem('datosRC', JSON.stringify(item));
    window.open('/Rutas-Conexiones', '_blank');
  }
}
