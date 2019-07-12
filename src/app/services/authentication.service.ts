import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {

  }

  authenticateUser(data) {
    return this.httpClient.post('http://localhost:3000/auth/v1',data);

  }

  setBearerToken(token:string) {
    localStorage.setItem('authToken',token);


  }

  getBearerToken():string {
    return localStorage.getItem('authToken');

  }

  isUserAuthenticated(token): Promise<boolean> {
return;
  }
}
