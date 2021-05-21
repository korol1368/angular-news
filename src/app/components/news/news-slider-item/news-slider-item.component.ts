import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../../models/news.interface';

@Component({
  selector: 'app-news-slider-item',
  templateUrl: './news-slider-item.component.html',
  styleUrls: ['./news-slider-item.component.scss'],
})
export class NewsSliderItemComponent implements OnInit {
  @Input() news: News | null = null;

  constructor() {}

  ngOnInit(): void {}
}
