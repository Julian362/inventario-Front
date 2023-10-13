import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInSource = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedInSource.asObservable();

  constructor() {
    // Puedes inicializar el estado loggedIn desde donde guardes la información de la sesión del usuario.
    // Por ejemplo, si estás utilizando localStorage:
    // this.loggedInSource.next(localStorage.getItem('isLoggedIn') === 'true');
  }

  login() {
    // Lógica de inicio de sesión
    this.loggedInSource.next(true);
    // Si estás utilizando localStorage para persistir el estado loggedIn:
    // localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    // Lógica de cierre de sesión
    this.loggedInSource.next(false);
    // Si estás utilizando localStorage para persistir el estado loggedIn:
    // localStorage.setItem('isLoggedIn', 'false');
  }

  get isLoggedIn() {
    return this.loggedIn$;
  }
}
