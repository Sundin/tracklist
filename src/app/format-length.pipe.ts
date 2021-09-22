import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatLength'
})
export class FormatLengthPipe implements PipeTransform {

  transform(timeInSeconds: number): string {
    var minutes = Math.floor(timeInSeconds / 60);
    var seconds = timeInSeconds % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }

}
