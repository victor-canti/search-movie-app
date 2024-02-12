import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {

  constructor(private httpClient: HttpClient) { }

  getMovies(movieTitle: string): Observable<any> {
    const url = `http://www.omdbapi.com/?t=${movieTitle}&apikey=b881bf22`
    return this.httpClient.get(url);
  }
}
