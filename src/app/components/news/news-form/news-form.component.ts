import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {News} from '../../../models/news.interface';
import {NewsService} from '../../../services/news.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss'],
})
export class NewsFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
    });
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    const news = {
      title: this.form.value.title,
      description: this.form.value.description,
    } as News;

    this.newsService
      .addNews(news)
      .pipe(take(1))
      .subscribe(() => this.form.reset());
  }
}
