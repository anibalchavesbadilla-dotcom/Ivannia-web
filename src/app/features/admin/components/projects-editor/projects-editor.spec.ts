import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsEditor } from './projects-editor';

describe('ProjectsEditor', () => {
  let component: ProjectsEditor;
  let fixture: ComponentFixture<ProjectsEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
