import {Component, OnInit} from '@angular/core';
import {NewsService} from '../../../services/news.service';
import {Observable} from 'rxjs';
import {News} from '../../../models/news.interface';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  news$!: Observable<News[]>;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.news$ = this.newsService.getList();
  }
}
