import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../track';

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

}
