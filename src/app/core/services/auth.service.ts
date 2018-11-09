import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  baseUrl: string = environment.apiUrl;


  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/user/auth/login`, { userName: username, password: password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            console.log(user);
            if (user && user.resultObject.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user.resultObject));
            }

            return user;
        }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}

}
