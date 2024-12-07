import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '@ingeniemos.la/dashboard';

@Component({
  imports: [RouterModule, DashboardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'siscontsi';
}
