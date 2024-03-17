import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'progettoVenerdi';
  isBlue: boolean = false;

  links: string[] = ['Link 1', 'Link 2', 'Link 3'];

  showAlert(message: string) {
    alert(message);
  }
}
