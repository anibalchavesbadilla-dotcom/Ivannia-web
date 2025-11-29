import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-editor',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home-editor.html',
  styleUrl: './home-editor.css',
})
export class HomeEditorComponent {
  @Input({ required: true }) group!: FormGroup;
}
