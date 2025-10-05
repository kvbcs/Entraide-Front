import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../Environments/environment';
import { Auth } from '../../Models/auth.types';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../Models/response.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  readonly baseUrl = environment.SERVER_URL;

  Register(dto: Auth): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/auth/register`, dto);
  }

  Login(dto: { email: string; password: string }): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/auth/login`, dto, {
      withCredentials: true, //pour récupérer le cookie
    });
  }
}
