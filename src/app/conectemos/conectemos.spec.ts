import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conectemos } from './conectemos';

describe('Conectemos', () => {
  let component: Conectemos;
  let fixture: ComponentFixture<Conectemos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conectemos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conectemos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
