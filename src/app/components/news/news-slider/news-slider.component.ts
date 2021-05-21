import {Component, OnInit} from '@angular/core';
import {News} from '../../../models/news.interface';
import {NewsService} from '../../../services/news.service';

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.scss'],
})
export class NewsSliderComponent implements OnInit {
  news!: News[];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getList().subscribe((news) => {
      this.news = news.slice(-3);
    });
  }
}
