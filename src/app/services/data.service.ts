import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../models/news.interface';
import {environment} from '../../environments/environment';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getList(): Observable<News[]> {
    return this.http.get<News[]>(environment.apiUrl.news);
  }
}
