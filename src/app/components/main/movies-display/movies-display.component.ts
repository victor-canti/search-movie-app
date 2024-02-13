import { Component } from '@angular/core';
import { SearchMoviesService } from 'src/app/services/search-movies.service';

@Component({
  selector: 'movies-display',
  templateUrl: './movies-display.component.html',
  styleUrls: ['./movies-display.component.css']
})
export class MoviesDisplayComponent {

  constructor(private searchMovie: SearchMoviesService) {}

  title: string = '';
  year: string = '';
  rated: string = '';
  released: string = '';
  genre: string = '';
  writer: string = '';
  actors: string = '';
  plot: string = '';
  language: string = '';
  rating: string[] = [];
  imgPath: string = '';

  getMovie(movie: string) {
    this.searchMovie.getMovies(movie).subscribe((data) => {
      this.title = data.Title;
      this.year = data.Year;
      this.rated = data.Rated;
      this.released = data.Released;
      this.genre = data.Genre;
      this.writer = data.Writer;
      this.actors = data.Actors;
      this.plot = data.Plot;
      this.language = data.Language
      this.rating.push(data.Rating);
      this.imgPath = data.Poster;
  })
  }
}
