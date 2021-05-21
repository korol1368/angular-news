import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NewsListComponent} from './news-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NewsService} from '../../../services/news.service';
import {DataService} from '../../../services/data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsListComponent],
      imports: [HttpClientTestingModule],
      providers: [DataService, NewsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
