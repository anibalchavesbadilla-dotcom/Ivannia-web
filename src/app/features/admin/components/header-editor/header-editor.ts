import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-editor',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './header-editor.html',
  styleUrl: './header-editor.css',
})
export class HeaderEditorComponent {
  @Input({ required: true }) group!: FormGroup;
}
