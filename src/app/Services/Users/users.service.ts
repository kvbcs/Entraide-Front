import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Users } from '../../Models/users.types';
import { environment } from '../../../Environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../Models/response.types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  private router = inject(Router);
  readonly baseUrl: string = environment.SERVER_URL + '/users';

  getUsers(): Observable<Users[]> {
    return this.http
      .get<ApiResponse<Users[]>>(`${this.baseUrl}`, { withCredentials: true })
      .pipe(
        tap((res) => console.log(res.data)),
        map((res) => res.data || [])
      ); // transforme l'Observable pour ne renvoyer que data
  }

  getUsersById(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.baseUrl}/${id}`).pipe(
      tap((res) => {
        console.log(res);
        return res;
      })
    );
  }

  updateUsers(dto: Users, id: number): Observable<ApiResponse> {
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

  deleteUsers(dto: Users, id: number): Observable<ApiResponse> {
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
