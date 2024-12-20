import {Component} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatTabLink, MatTabNav} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatTabLink, MatTabNav],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ai2-lab5-angular';

  constructor(private router: Router) {}

  public activeUrl(): string {
    return this.router.url;
  }
}
