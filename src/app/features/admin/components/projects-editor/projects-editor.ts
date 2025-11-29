import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-projects-editor',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './projects-editor.html',
  styleUrl: './projects-editor.css',
})
export class ProjectsEditorComponent {
  @Input({ required: true }) array!: FormArray;
  private fb = inject(FormBuilder);

  asGroup(control: any): FormGroup {
    return control as FormGroup;
  }

  getVideosArray(projectGroup: FormGroup): FormArray {
    return projectGroup.get('Videos') as FormArray;
  }

  addProject() {
    const newProject = this.fb.group({
      title: [''],
      'sub-title': [''],
      description: [''],
      iconUrl: [''],
      Videos: this.fb.array([])
    });
    this.array.push(newProject);
  }

  removeProject(index: number) {
    if(confirm('¿Estás seguro de eliminar este proyecto permanentemente?')) {
      this.array.removeAt(index);
    }
  }

  addVideo(projectGroup: FormGroup) {
    const videos = this.getVideosArray(projectGroup);
    videos.push(this.fb.group({ url: [''] }));
  }

  removeVideo(projectGroup: FormGroup, index: number) {
    const videos = this.getVideosArray(projectGroup);
    videos.removeAt(index);
  }
}
