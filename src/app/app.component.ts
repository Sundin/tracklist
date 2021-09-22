import { Component } from '@angular/core';
import { Track } from './track';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tracklist';

  tracksSideA: Track[] = [
    {
      title: "Track 1...",
      lengthInSeconds: 125,
    },
    {
      title: "Track 2...",
      lengthInSeconds: 81,
    },
  ];

  tracksSideB: Track[] = [
    {
      title: "Track 3...",
      lengthInSeconds: 175,
    },
    {
      title: "Track 4...",
      lengthInSeconds: 181,
    },
  ];

  totalLength(): number {
    return this.tracksSideA.concat(this.tracksSideB).reduce(
      (previousValue, currentValue) => previousValue + currentValue.lengthInSeconds, 0);
  }
}
