import { Component, inject, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admin',
  imports: [FormsModule,CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  data: any = {};
  loading = true;
  error = '';
  success = false;

  private db = inject(DbService);

  async ngOnInit() {
    try {
      const raw = await this.db.getPath('/');
      this.data = (raw ?? {}) as Record<string, any>;
    } catch {
      this.error = 'No se pudieron cargar los datos';
    } finally {
      this.loading = false;
    }
  }

  async guardar() {
    this.error = '';
    this.success = false;
    try {
      await this.db.writePath('/', this.data);
      this.success = true;
    } catch {
      this.error = 'Error al guardar';
    }
  }

  // Helpers
  isObject(v: any) {
    return v && typeof v === 'object' && !Array.isArray(v);
  }

  isArray(v: any) {
    return Array.isArray(v);
  }

  castRecord(v: any): Record<string, any> {
    return v as Record<string, any>;
  }

  castArray(v: any): any[] {
    return v as any[];
  }

  // ➕ Añadir servicio
  addService() {
    this.data.servicios.push({
      title: "",
      "sub-title": "",
      description: "",
      Imagen: "",
      Videos: [],
      "card-descripcion": "",
      icono: ""
    });
  }

  // ❌ Eliminar servicio
  removeService(index: number) {
    this.data.servicios.splice(index, 1);
  }

  // ➕ Añadir proyecto
  addProyecto() {
    this.data.proyectos.push({
      title: "",
      "sub-title": "",
      description: "",
      iconUrl: "",
      Videos: []
    });
  }

  // ❌ Eliminar proyecto
  removeProyecto(index: number) {
    this.data.proyectos.splice(index, 1);
  }

  // ➕ Añadir video
  addVideo(parent: any) {
    parent.Videos.push({ url: "" });
  }

  // ❌ Eliminar video
  removeVideo(parent: any, i: number) {
    parent.Videos.splice(i, 1);
  }
}
