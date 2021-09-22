import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../track';
import {CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  @Input() title?: string;
  @Input() tracks: Track[] = [];

  sideLength(): number {
    return this.tracks.reduce(
      (previousValue, currentValue) => previousValue + currentValue.lengthInSeconds, 0);
  }

  constructor() { }

  ngOnInit(): void {
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
