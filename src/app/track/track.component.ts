import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../track';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  @Input() track?: Track;
  @Input() onDeleteTrack?: Function;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    if (!this.onDeleteTrack || !this.track) {
      return;
    }
    this.onDeleteTrack(this.track);
  }
}
