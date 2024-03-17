import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../models/pelicula';
import { PeliculasService } from '../servicios/peliculas.service';

@Component({
  selector: 'app-tarjeta-pelicula',
  templateUrl: './tarjeta-pelicula.component.html',
  styleUrls: ['./tarjeta-pelicula.component.css']
})
export class TarjetaPeliculaComponent implements OnInit {
  @Input() peliculaId!: string;
  pelicula: Pelicula | undefined;
  description: boolean = false;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
      this.cargarPelicula();
  }

  cargarPelicula(): void {
    this.peliculasService.getPeliculaTitle(this.peliculaId).subscribe(
      pelicula => {
        this.pelicula = pelicula;
      },
      error => {
        console.error('Error al cargar la película:', error);
      }
    );
  }
  toggleDescripcion(): void {
    this.description = !this.description;
  }
}