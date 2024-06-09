import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { User } from "../app/domain/models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private basePath = environment.serverBasePath;
  private apiUrl = this.basePath + '/api/v1/user';

  userUpdated: EventEmitter<User> = new EventEmitter<User>();

  constructor(private _http: HttpClient, private _router: Router) { }

  login(item: any) {
    this._http.post(`${this.basePath}/auth/api/v1/login`, item).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          sessionStorage.setItem('token', response.token);
          this.saveUser(response.user);
          this._router.navigate(['/home']);
          this.userUpdated.emit(response.user);

        } else {
          alert(response.message);
        }
      },
      error: (error) => {
        alert('An error occurred during login. Please try again.');
      }
    });
  }

  register(item: any) {
    this._http.post(`${this.basePath}/auth/api/v1/register`, item).subscribe({
      next: (response: any) => {
        if (response.status === 'success') {
          sessionStorage.setItem('token', response.token);
          this.saveUser(response.user);
          this._router.navigate(['/home']);
          this.userUpdated.emit(response.user);

        } else {
          alert(response.message);
        }
      },
      error: (error) => {
        alert('An error occurred during registration. Please try again.');
      }
    });
  }

  getById(id: any) {
    return this._http.get(`${this.apiUrl}/${id}`);
  }

  saveUser(user: any) {
    sessionStorage.removeItem('user');
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  update(id: any, item: any) {
    return this._http.put(`${this.apiUrl}/${id}`, item);
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    this.userUpdated.emit(new User());
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }

  getUser(): User | null {
    const userString = sessionStorage.getItem('user');
    if (userString) {
      return Object.assign(new User(), JSON.parse(userString));
    }
    return null;
  }

  getToken(): string {
    const token = sessionStorage.getItem('token');
    return token ? token : "";
  }
}
