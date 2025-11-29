import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesEditor } from './services-editor';

describe('ServicesEditor', () => {
  let component: ServicesEditor;
  let fixture: ComponentFixture<ServicesEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
