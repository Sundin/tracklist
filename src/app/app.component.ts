import { Component } from '@angular/core';
import { Track } from './track';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tracklist';
  tracks: Track[] = [
    {
      title: "Track 1...",
      length: "04:00",
    },
    {
      title: "Track 2...",
      length: "04:00",
    },
  ];
}
