import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about-editor',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './about-editor.html',
  styleUrl: './about-editor.css',
})
export class AboutEditorComponent {
  @Input({ required: true }) quienSoyGroup!: FormGroup;
  @Input({ required: true }) aboutGroup!: FormGroup;
}
