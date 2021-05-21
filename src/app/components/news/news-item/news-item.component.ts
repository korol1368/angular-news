import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../../models/news.interface';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent implements OnInit {
  isShowDescription = false;
  constructor() {}
  @Input() news: News | null = null;
  ngOnInit(): void {}

  onClick(): void {
    this.isShowDescription = !this.isShowDescription;
  }
}
