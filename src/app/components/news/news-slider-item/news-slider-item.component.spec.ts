import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsSliderItemComponent} from './news-slider-item.component';

describe('NewsSliderItemComponent', () => {
  let component: NewsSliderItemComponent;
  let fixture: ComponentFixture<NewsSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsSliderItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
