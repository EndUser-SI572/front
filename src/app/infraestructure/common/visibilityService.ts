import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VisibilityService {
  private isVisible: boolean = false;

  isLogged(): boolean {
    return this.isVisible;
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
