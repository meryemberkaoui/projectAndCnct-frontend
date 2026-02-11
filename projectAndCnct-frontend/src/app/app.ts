import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component/header.component';
import { AuthDialogComponent } from './components/auth-dialog.component/auth-dialog.component';
import { HeroComponent } from './components/hero.component/hero.component';
import { FooterComponent } from './components/footer.component/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AuthDialogComponent, HeroComponent, FooterComponent],
  templateUrl: './app.html',
})
export class App {
  authOpen = false;

  openAuthModal() {
    this.authOpen = true;
  }
}
