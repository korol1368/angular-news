import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NewsSliderItemComponent} from './news-slider-item.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('NewsSliderItemComponent', () => {
  let component: NewsSliderItemComponent;
  let fixture: ComponentFixture<NewsSliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsSliderItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
