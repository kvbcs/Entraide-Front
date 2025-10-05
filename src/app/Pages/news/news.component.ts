import { Component, inject, OnInit, signal } from '@angular/core';
import { NewsService } from '../../../Services/News/news.service';
import { News } from '../../../Models/news.types';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit{
  private newsService = inject(NewsService)
  news = signal<News[]>([])

  getNews(): void {
    this.newsService.getNews().subscribe({
      next: (data) => {
        console.log(data);
        
        this.news.set(data)
      },
      error: (err) => {
        console.log(err);
        alert(err.message)
      }
    })
  }

  ngOnInit(): void {
      this.getNews()
  }
}
