import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackComponent } from './track/track.component';
import { SideComponent } from './side/side.component';
import { FormatLengthPipe } from './format-length.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TrackComponent,
    SideComponent,
    FormatLengthPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
