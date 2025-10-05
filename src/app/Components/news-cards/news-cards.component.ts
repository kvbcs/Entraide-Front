import { Component, Input } from '@angular/core';
import { News } from '../../Models/news.types';

@Component({
  selector: 'app-news-cards',
  imports: [],
  templateUrl: './news-cards.component.html',
})
export class NewsCardsComponent {
  @Input() news!: News;

  log() {
    console.log(this.news.id_news);
  }
}
