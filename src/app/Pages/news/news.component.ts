import { Component, inject, OnInit, signal } from '@angular/core';
import { News } from '../../Models/news.types';
import { NewsCardsComponent } from '../../Components/news-cards/news-cards.component';
import { NewsService } from '../../Services/News/news.service';

@Component({
  selector: 'app-news',
  imports: [NewsCardsComponent],
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
  private newsService = inject(NewsService);
  news = signal<News[]>([]);

  getNews(): void {
    this.newsService.getNews().subscribe({
      next: (data) => {
        console.log(data);

        this.news.set(data);
      },
      error: (err) => {
        console.log(err);
        alert(err.message);
      },
    });
  }

  ngOnInit(): void {
    this.getNews();
  }
}
