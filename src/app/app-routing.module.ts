import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsDetailComponent} from './components/news/news-detail/news-detail.component';
import {NewsComponent} from './components/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: 'news/:id',
    component: NewsDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
