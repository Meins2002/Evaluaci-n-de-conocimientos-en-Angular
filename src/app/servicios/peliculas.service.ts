import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiUrl = 'https://ghibliapi.vercel.app/films';
  private localStorageKey = 'peliculas';

  constructor(private http: HttpClient) { }

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.apiUrl);
  }

  getPeliculaTitle(nombre: string): Observable<Pelicula> {
    return this.http.get<Pelicula[]>(`${this.apiUrl}?title=${nombre}`).pipe(
      map(peliculas => peliculas[0]) 
    );
  }
  
  agregarPelicula(peliculaData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, peliculaData).pipe(
      tap((pelicula: Pelicula) => {
        this.updateLocalStorage(pelicula);
      })
    );
  }
    
  actualizarPelicula(pelicula: Pelicula): Observable<any> {
    const url = `${this.apiUrl}/${pelicula.id}`;
    return this.http.put<any>(url, pelicula).pipe(
      tap(() => {
        this.updateLocalStorage(pelicula);
      })
    );
  }
  
  eliminarPelicula(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url).pipe(
      tap(() => {
        let peliculas: Pelicula[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
        peliculas = peliculas.filter(p => p.id !== id);
        localStorage.setItem(this.localStorageKey, JSON.stringify(peliculas));
      })
    );
  }

  private mapPeliculaData(data: any): Pelicula {
    return {
      id: data.id,
      title: data.title,
      original_title: data.original_title,
      original_title_romanised: data.original_title_romanised,
      image: data.image,
      movie_banner: data.movie_banner,
      release_date: data.release_date,
      running_time: data.running_time,
      rt_score: data.rt_score,
      people: data.people,
      species: data.species,
      locations: data.locations,
      vehicles: data.vehicles,
      url: data.url,
      director: data.director,
      year: data.year,
      description: data.description,
     
    };
  }

  private updateLocalStorage(pelicula: Pelicula): void {
    let peliculas: Pelicula[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    const index = peliculas.findIndex(p => p.id === pelicula.id);
    if (index !== -1) {
      peliculas[index] = pelicula;
    } else {
      peliculas.push(pelicula);
    }
    localStorage.setItem(this.localStorageKey, JSON.stringify(peliculas));
  }
}
 
  
 