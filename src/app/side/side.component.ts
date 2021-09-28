import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../track';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  @Input() title?: string;
  @Input() tracks: Track[] = [];
  @Input() longestSide: number = 0;

  newTrack: any = {
    title: "",
    length: "",
  }

  invalidTitle = false;
  invalidLength = false;

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

  onAddTrack() {
    const trackLength = this.newTrack.length.split(":");
    const minutes = parseInt(trackLength[0]);
    const seconds = parseInt(trackLength[trackLength.length - 1]);

    if (!this.newTrack.title) {
      this.invalidTitle = true;
    }
    if (!this.newTrack.length || isNaN(minutes) || isNaN(seconds)) {
      this.invalidLength = true;
    }
    if (this.invalidTitle || this.invalidLength) {
      setTimeout(() => {
        this.invalidTitle = false;
        this.invalidLength = false;
      }, 1500);
      return;
    }

    this.tracks.push({
      title:this.newTrack.title,
      lengthInSeconds: minutes * 60 + seconds,
      id: Date.now().toString(),
    });
    this.newTrack = {
      title: "",
      length: "",
    };
  }

  // Use fat arrow function in order to inherit the context of the parent scope.
  // This way we can use the this keyword without binding it.
  onDeleteTrack = (track: Track) =>  {
    this.tracks = this.tracks.filter(t => t.id !== track.id);
  }

  lengthInputChanged(event: any) {
    if (this.newTrack.length.length === 2 && !this.newTrack.length.includes(":")) {
      this.newTrack.length += ":";
    }
  }

  calculateHeight() {
    return this.longestSide * 80 + 95;
  }
}
