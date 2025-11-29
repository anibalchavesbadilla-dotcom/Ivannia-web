import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEditor } from './about-editor';

describe('AboutEditor', () => {
  let component: AboutEditor;
  let fixture: ComponentFixture<AboutEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
