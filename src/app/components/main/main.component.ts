import { Component, ElementRef, ViewChild } from '@angular/core';
import { MoviesDisplayComponent } from './movies-display/movies-display.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  @ViewChild(MoviesDisplayComponent) moviesDisplay!: MoviesDisplayComponent;
  @ViewChild('input') inputValue?: ElementRef;

  movieTitle(title: string) {
    if (title) {
     this.moviesDisplay.getMovie(title)
     this.inputValue!.nativeElement.value = '';
    }
  }
}
