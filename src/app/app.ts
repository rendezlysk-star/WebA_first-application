import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeader } from './components/main-header/main-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainHeader],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-application');
}
