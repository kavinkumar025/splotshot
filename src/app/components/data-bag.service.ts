import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataBagService {

  constructor() { }

  public isUserLoggedIn = false;

  isLoggedIn(): boolean {
    return this.isUserLoggedIn || localStorage.getItem('loggedIn') === 'true';
  }
  
}
