import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';
import { Pelicula } from '../models/pelicula';

@Component({
  selector: 'app-pelicula-lista',
  templateUrl: './pelicula-lista.component.html',
  styleUrls: ['./pelicula-lista.component.css']
})

export class PeliculaListaComponent implements OnInit {

  peliculas: Pelicula[]= [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  obtenerPeliculas(): void {
    this.peliculasService.getPeliculas().subscribe((peliculas: Pelicula[]) => {
      this.peliculas = peliculas;
      localStorage.setItem('peliculas', JSON.stringify(peliculas));
    });
  }
  eliminarPelicula(id: string): void {
    this.peliculasService.eliminarPelicula(id).subscribe(() => {
      this.obtenerPeliculas();
    }, error => {
      console.error('Error al eliminar la película:', error);
    });
  }

}