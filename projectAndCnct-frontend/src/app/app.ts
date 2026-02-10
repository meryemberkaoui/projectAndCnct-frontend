import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component/header.component';
import { FooterComponent } from './components/footer.component/footer.component';
import { HeroComponent } from './components/hero.component/hero.component'


@Component({
  selector: 'app-root',
  imports: [HeroComponent, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projectAndCnct-frontend');
  openAuthModal() {
    console.log('Ouvre modal Auth');
  }

}
