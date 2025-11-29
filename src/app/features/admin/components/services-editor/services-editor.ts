import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-services-editor',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './services-editor.html',
  styleUrl: './services-editor.css',
})
export class ServicesEditorComponent {
  @Input({ required: true }) array!: FormArray;
  private fb = inject(FormBuilder);

  // Helper para castear AbstractControl a FormGroup en el template
  asGroup(control: any): FormGroup {
    return control as FormGroup;
  }

  getVideosArray(serviceGroup: FormGroup): FormArray {
    return serviceGroup.get('Videos') as FormArray;
  }

  addService() {
    const newService = this.fb.group({
      title: [''],
      'sub-title': [''],
      description: [''],
      Imagen: [''],
      'card-descripcion': [''],
      icono: [''],
      Videos: this.fb.array([])
    });
    this.array.push(newService);
  }

  removeService(index: number) {
    if(confirm('¿Estás seguro de eliminar este servicio?')) {
      this.array.removeAt(index);
    }
  }

  addVideo(serviceGroup: FormGroup) {
    const videos = this.getVideosArray(serviceGroup);
    videos.push(this.fb.group({ url: [''] }));
  }

  removeVideo(serviceGroup: FormGroup, index: number) {
    const videos = this.getVideosArray(serviceGroup);
    videos.removeAt(index);
  }
}
