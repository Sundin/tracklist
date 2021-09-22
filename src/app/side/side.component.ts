import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../track';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  @Input() title?: string;
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

  constructor() { }

  ngOnInit(): void {
  }

}
