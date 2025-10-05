import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../Environments/environment';
import { Auth } from '../../Models/auth.types';
import { catchError, map, Observable, of } from 'rxjs';
import { ApiResponse } from '../../Models/response.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  readonly baseUrl = environment.SERVER_URL + '/auth';

  Register(dto: Auth): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/register`, dto);
  }

  Login(dto: { email: string; password: string }): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/login`, dto, {
      withCredentials: true, //pour récupérer le cookie
    });
  }

  isLoggedIn(): Observable<boolean> {
    return this.http
      .get<{ id: number; email: string }>(`${this.baseUrl}/me`, {
        withCredentials: true,
      })
      .pipe(
        map((user) => !!user), // true si user existe
        catchError(() => of(false)) // false si erreur (401 non connecté)
      );
  }
}
