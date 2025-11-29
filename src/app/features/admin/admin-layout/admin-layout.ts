import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SiteData } from '../../../core/models/site-data';
import { HeaderEditorComponent } from '../components/header-editor/header-editor';
import { ServicesEditorComponent } from '../components/services-editor/services-editor';
import { FooterEditorComponent } from '../components/footer-editor/footer-editor';
import { AboutEditorComponent } from '../components/about-editor/about-editor';
import { HomeEditorComponent } from '../components/home-editor/home-editor';
import { ValuesEditorComponent } from '../components/values-editor/values-editor';
import { ProjectsEditorComponent } from '../components/projects-editor/projects-editor';
import { DbService } from '../../../services/db.service';

@Component({
  selector: 'app-admin-layout',
  imports: [
    CommonModule, ReactiveFormsModule,
    HeaderEditorComponent, FooterEditorComponent, HomeEditorComponent,
    AboutEditorComponent, ValuesEditorComponent, ServicesEditorComponent,
    ProjectsEditorComponent
  ],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayoutComponent implements OnInit {
  private fb = inject(FormBuilder);
  private db = inject(DbService);

  form!: FormGroup;
  loading = true;

  ngOnInit() {
    this.db.getPath('/').then((data: SiteData)=>{
      this.initForm(data);
      this.loading = false;
    });
  }

  // Inicializa el formulario mapeando la estructura JSON
  initForm(data: SiteData) {
    this.form = this.fb.group({
      header: this.fb.group(data.header),
      footer: this.fb.group(data.footer),
      home: this.fb.group(data.home),
      QuienSoy: this.fb.group(data.QuienSoy),
      about: this.fb.group(data.about),
      NuestrosValores: this.fb.group({
        titulo: [data.NuestrosValores.titulo],
        gifUrl: [data.NuestrosValores.gifUrl],
        valores: this.fb.array(data.NuestrosValores.valores.map(v => this.fb.group(v)))
      }),
      // Para servicios y proyectos, necesitamos mapear arrays complejos
      servicios: this.fb.array(data.servicios.map(s => this.createServiceGroup(s))),
      proyectos: this.fb.array(data.proyectos.map(p => this.createProjectGroup(p)))
    });
  }

  // Helpers para crear grupos complejos con arrays anidados (Videos)
  createServiceGroup(s: any) {
    return this.fb.group({
      title: [s.title],
      'sub-title': [s['sub-title']],
      description: [s.description],
      Imagen: [s.Imagen],
      'card-descripcion': [s['card-descripcion']],
      icono: [s.icono],
      Videos: this.fb.array((s.Videos || []).map((v: any) => this.fb.group({ url: [v.url] })))
    });
  }

  createProjectGroup(p: any) {
    return this.fb.group({
      title: [p.title],
      'sub-title': [p['sub-title']],
      description: [p.description],
      iconUrl: [p.iconUrl],
      Videos: this.fb.array((p.Videos || []).map((v: any) => this.fb.group({ url: [v.url] })))
    });
  }

  // Getters tipados para el template
  getGroup(name: string): FormGroup {
    return this.form.get(name) as FormGroup;
  }
  getArray(name: string): FormArray {
    return this.form.get(name) as FormArray;
  }

  save() {
    if (this.form.valid) {
      console.log('Enviando JSON:', this.form.value);
      this.db.writePath('/',this.form.value).then(() => alert('Guardado con éxito'));
    }
  }
}
