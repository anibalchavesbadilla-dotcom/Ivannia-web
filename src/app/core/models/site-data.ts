// src/app/core/models/site-data.interface.ts

export interface VideoItem {
  url: string;
}

export interface ServiceItem {
  title: string;
  "sub-title": string;
  description: string;
  Imagen: string;
  Videos: VideoItem[];
  "card-descripcion": string;
  icono: string;
}

export interface ProjectItem {
  title: string;
  "sub-title": string;
  description: string;
  iconUrl: string;
  Videos: VideoItem[];
}

export interface ValueItem {
  titulo: string;
  description: string;
}

export interface SiteData {
  header: {
    name: string;
    logo: string;
    whatsApp: string;
    gCalendar: string;
  };
  footer: {
    email: string;
    facebook: string;
    instagram: string;
    tiktok: string;
  };
  home: {
    title: string;
    description: string;
    qSomosTitulo: string;
    qSomosDes: string;
    clientesTitulo: string;
    clientesDes: string;
    rutasTitulo: string;
    rutasDes: string;
  };
  QuienSoy: {
    titulo: string;
    description: string;
    imgUrl: string;
  };
  about: {
    titulo: string;
    description: string;
    imgUrl: string;
    mision: string;
    misionImg: string;
    vision: string;
    visionImg: string;
  };
  NuestrosValores: {
    titulo: string;
    gifUrl: string;
    valores: ValueItem[];
  };
  servicios: ServiceItem[];
  proyectos: ProjectItem[];
}
