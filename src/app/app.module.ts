import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NewsListComponent} from './components/news/news-list/news-list.component';
import {NewsItemComponent} from './components/news/news-item/news-item.component';
import {NewsFormComponent} from './components/news/news-form/news-form.component';
import {NewsSliderComponent} from './components/news/news-slider/news-slider.component';
import {NewsSliderItemComponent} from './components/news/news-slider-item/news-slider-item.component';
import {DataService} from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {NewsService} from './services/news.service';
import {ReactiveFormsModule} from '@angular/forms';
import {NewsDetailComponent} from './components/news/news-detail/news-detail.component';
import {NewsComponent} from './components/news/news.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsItemComponent,
    NewsFormComponent,
    NewsSliderComponent,
    NewsSliderItemComponent,
    NewsDetailComponent,
    NewsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, ReactiveFormsModule, FontAwesomeModule],
  providers: [DataService, NewsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
