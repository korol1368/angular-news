import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NewsFormComponent} from './news-form.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DataService} from '../../../services/data.service';
import {NewsService} from '../../../services/news.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveFormsModule} from '@angular/forms';

describe('NewsFormComponent', () => {
  let component: NewsFormComponent;
  let fixture: ComponentFixture<NewsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsFormComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [DataService, NewsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
