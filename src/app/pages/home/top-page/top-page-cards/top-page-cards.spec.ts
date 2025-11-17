import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPageCards } from './top-page-cards';

describe('TopPageCards', () => {
  let component: TopPageCards;
  let fixture: ComponentFixture<TopPageCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopPageCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPageCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
