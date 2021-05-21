import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NewsSliderComponent} from './news-slider.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NewsService} from '../../../services/news.service';
import {DataService} from '../../../services/data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('NewsSliderComponent', () => {
  let component: NewsSliderComponent;
  let fixture: ComponentFixture<NewsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsSliderComponent],
      imports: [HttpClientTestingModule],
      providers: [DataService, NewsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
