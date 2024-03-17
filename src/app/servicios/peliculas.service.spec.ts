import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiUrl = 'https://ghibliapi.vercel.app/films';
  private localStorageKey = 'peliculas';

  constructor(private http: HttpClient) { }

  getPeliculaById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  obtenerPeliculas(): Observable<any[]> {
    // Llama a la API para obtener las películas
    return this.http.get<any[]>(this.apiUrl);
  }

  guardarPeliculasLocalStorage(peliculas: any[]): void {
    // Guarda las películas en el LocalStorage
    localStorage.setItem(this.localStorageKey, JSON.stringify(peliculas));
  }
}