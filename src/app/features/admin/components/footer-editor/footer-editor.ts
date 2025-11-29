import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer-editor',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './footer-editor.html',
  styleUrl: './footer-editor.css',
})
export class FooterEditorComponent {
  @Input({ required: true }) group!: FormGroup;
}
