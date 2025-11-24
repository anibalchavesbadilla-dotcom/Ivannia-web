import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasConexiones } from './rutas-conexiones';

describe('RutasConexiones', () => {
  let component: RutasConexiones;
  let fixture: ComponentFixture<RutasConexiones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutasConexiones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutasConexiones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
