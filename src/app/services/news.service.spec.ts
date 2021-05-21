import {TestBed} from '@angular/core/testing';
import {NewsService} from './news.service';
import {DataService} from './data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('NewsService', () => {
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsService, DataService],
    });
    service = TestBed.inject(NewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
