import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-slider',
  templateUrl: './news-slider.component.html',
  styleUrls: ['./news-slider.component.scss'],
})
export class NewsSliderComponent implements OnInit {
  news = [1, 2, 3];

  constructor() {}

  ngOnInit(): void {}
}
