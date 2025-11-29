import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-values-editor',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './values-editor.html',
  styleUrl: './values-editor.css',
})
export class ValuesEditorComponent {
  @Input({ required: true }) group!: FormGroup;
  private fb = inject(FormBuilder);

  get valoresArray(): FormArray {
    return this.group.get('valores') as FormArray;
  }

  asGroup(control: any): FormGroup {
    return control as FormGroup;
  }

  addValue() {
    this.valoresArray.push(this.fb.group({
      titulo: [''],
      description: ['']
    }));
  }

  removeValue(index: number) {
    if(confirm('¿Eliminar este valor?')) {
      this.valoresArray.removeAt(index);
    }
  }
}
