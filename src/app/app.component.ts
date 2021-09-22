import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tracklist';
  tracks = ['Track 1...', 'Track 2...', 'Track 3...'];
}
