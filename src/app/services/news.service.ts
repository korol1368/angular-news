import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {News} from '../models/news.interface';
import {take} from 'rxjs/operators';

@Injectable()
export class NewsService {
  private news = new BehaviorSubject<News[]>([]);

  constructor(private dataService: DataService) {
    this.dataService
      .getList()
      .pipe(take(1))
      .subscribe((news) => this.news.next(news));
  }

  getList(): Observable<News[]> {
    return this.news.asObservable();
  }
}
