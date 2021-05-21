import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../../models/news.interface';
import {faComment, faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent implements OnInit {
  faEye = faEye;
  faComment = faComment;

  isShowDescription = false;
  @Input() news: News | null = null;

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.isShowDescription = !this.isShowDescription;
  }
}
