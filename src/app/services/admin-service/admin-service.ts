import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private isAdmin = signal(false)
  constructor() {
    if (localStorage.getItem('isAdmin') === 'true'){
      this.isAdmin.set(true)
    }
  }

  get adminState() {
    return this.isAdmin()
  }

  changeToAdmin() {
    this.isAdmin.set(true)
    localStorage.setItem('isAdmin', 'true');
  }

  changeToUser() {
    this.isAdmin.set(false)
    localStorage.setItem('isAdmin', 'false');
  }
}
