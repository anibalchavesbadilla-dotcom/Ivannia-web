import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesEditor } from './values-editor';

describe('ValuesEditor', () => {
  let component: ValuesEditor;
  let fixture: ComponentFixture<ValuesEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuesEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuesEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
