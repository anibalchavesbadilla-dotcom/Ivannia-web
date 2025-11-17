import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-top-page-cards',
  imports: [CommonModule],
  templateUrl: './top-page-cards.html',
  styleUrl: './top-page-cards.css'
})
export class TopPageCards {
  soluciones = [
    {
      titulo: 'Talleres personalizados',
      descripcion: 'Brindamos capacitaciones donde descubrirás el poder de conectar con tu audiencia desde la emoción, y que podés aplicar por vos mismo las técnicas que transforman experiencias en resultados reales.',
      icono: 'bi bi-person-video2 c-citrine fz-p'
    },
    {
      titulo: 'Estrategias de Mercadeo',
      descripcion: 'Una estrategia efectiva no solo define pasos, sino que conecta el propósito de tu marca con lo que las personas sienten y necesitan. En SoulSync, diseñamos estrategias con valor humano: inteligentes, emocionales y orientadas al crecimiento real de tu negocio.',
      icono: 'bi bi-graph-up-arrow c-citrine fz-p'
    },
    {
      titulo: 'Creación de contenido',
      descripcion: 'Creamos contenido visual, videos, fotografías e historias digitales diseñadas para emocionar, inspirar acción y fortalecer la conexión con tu comunidad.',
      icono: 'bi bi-camera-reels c-citrine fz-p'
    },
    {
      titulo: 'Manejo de redes sociales',
      descripcion: 'Nos encargamos de gestionar tus redes con propósito, desde la creación de contenido hasta el manejo de campañas publicitarias inteligentes, diseñadas para llegar directo a tu público ideal sin invertir de más.',
      icono: 'bi bi-phone c-citrine fz-p'
    }
  ];
}
