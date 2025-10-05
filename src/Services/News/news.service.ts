import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../Environments/environment';
import { Observable, tap } from 'rxjs';
import { News } from '../../Models/news.types';
import { ApiResponse } from '../../Models/response.types';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private http = inject(HttpClient);
  private router = inject(Router);
  readonly baseUrl: string = environment.SERVER_URL + '/news';

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(`${this.baseUrl}`).pipe(
      tap((res) => {
        console.log(res);
        return res;
      })
    );
  }

  getNewsById(id: number): Observable<News> {
    return this.http.get<News>(`${this.baseUrl}/${id}`).pipe(
      tap((res) => {
        console.log(res);
        return res;
      })
    );
  }

  createNews(dto: News): Observable<ApiResponse> {
    return this.http
      .post<ApiResponse>(`${this.baseUrl}`, dto, { withCredentials: true })
      .pipe(
        tap((res) => {
          console.log(res);
          return res;
        })
      );
  }

  updateNews(dto: News, id: number): Observable<ApiResponse> {
    return this.http
      .post<ApiResponse>(`${this.baseUrl}/${id}`, dto, {
        withCredentials: true,
      })
      .pipe(
        tap((res) => {
          console.log(res);
          return res;
        })
      );
  }

  deleteNews(dto: News, id: number): Observable<ApiResponse> {
    return this.http
      .post<ApiResponse>(`${this.baseUrl}/${id}`, dto, {
        withCredentials: true,
      })
      .pipe(
        tap((res) => {
          console.log(res);
          return res;
        })
      );
  }
}
