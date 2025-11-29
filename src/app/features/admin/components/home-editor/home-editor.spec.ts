import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEditor } from './home-editor';

describe('HomeEditor', () => {
  let component: HomeEditor;
  let fixture: ComponentFixture<HomeEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEditor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
