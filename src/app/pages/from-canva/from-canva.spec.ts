import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromCanva } from './from-canva';

describe('FromCanva', () => {
  let component: FromCanva;
  let fixture: ComponentFixture<FromCanva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FromCanva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromCanva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
