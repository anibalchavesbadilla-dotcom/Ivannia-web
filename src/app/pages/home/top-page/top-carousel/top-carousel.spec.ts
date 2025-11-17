import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCarousel } from './top-carousel';

describe('TopCarousel', () => {
  let component: TopCarousel;
  let fixture: ComponentFixture<TopCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
