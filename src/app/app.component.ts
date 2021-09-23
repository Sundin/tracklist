import { Component } from '@angular/core';
import { Track } from './track';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tracklist';

  tracksSideA: Track[] = isDevMode() ? [
    {
      title: "Track 1",
      lengthInSeconds: 125,
    },
    {
      title: "Track 2",
      lengthInSeconds: 81,
    },
  ] : [];

  tracksSideB: Track[] = [];

  totalLength(): number {
    return this.tracksSideA.concat(this.tracksSideB).reduce(
      (previousValue, currentValue) => previousValue + currentValue.lengthInSeconds, 0);
  }

  onDrop(event: CdkDragDrop<Track[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}
