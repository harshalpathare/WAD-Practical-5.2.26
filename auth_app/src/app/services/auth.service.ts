import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private user: any = null;

  register(name: string, email: string, password: string) {
    this.user = { name, email, password };
  }

  login(email: string, password: string): boolean {
    if (this.user && this.user.email === email && this.user.password === password) {
      return true;
    }
    return false;
  }

  getUser() {
    return this.user;
  }
}
