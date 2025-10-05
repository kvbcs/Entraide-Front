import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../Environments/environment';
import { map, Observable, tap } from 'rxjs';
import { ApiResponse } from '../../Models/response.types';
import { Volunteers } from '../../Models/volunteers.types';

@Injectable({
  providedIn: 'root',
})
export class VolunteersService {
  private http = inject(HttpClient);
  private router = inject(Router);
  readonly baseUrl: string = environment.SERVER_URL + '/volunteers';

  getVolunteers(): Observable<Volunteers[]> {
    return this.http
      .get<ApiResponse<Volunteers[]>>(`${this.baseUrl}`, { withCredentials: true })
      .pipe(
        tap((res) => console.log(res.data)),
        map((res) => res.data || [])
      ); // transforme l'Observable pour ne renvoyer que data
  }

  getVolunteersById(id: number): Observable<Volunteers> {
    return this.http.get<Volunteers>(`${this.baseUrl}/${id}`).pipe(
      tap((res) => {
        console.log(res);
        return res;
      })
    );
  }

  createVolunteers(dto: Volunteers): Observable<ApiResponse> {
      return this.http
        .post<ApiResponse>(`${this.baseUrl}`, dto, { withCredentials: true })
        .pipe(
          tap((res) => {
            console.log(res);
            return res;
          })
        );
  }
  
  updateVolunteers(dto: Volunteers, id: number): Observable<ApiResponse> {
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

  deleteVolunteers(dto: Volunteers, id: number): Observable<ApiResponse> {
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
