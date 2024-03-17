import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../servicios/peliculas.service';
import { Pelicula } from '../models/pelicula';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {

  pelicula: Pelicula | undefined;
  peliculaForm: FormGroup;
  errorMessage: string | undefined;
  mostrarDetalles: boolean = false; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peliculasService: PeliculasService,
    private formBuilder: FormBuilder
  ) {
    this.peliculaForm = this.formBuilder.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      description: ['', Validators.required],
      image: ['']
    });
  }

  ngOnInit(): void {}

  obtenerPelicula(): void {
    const nombre = this.peliculaForm.get('title')?.value;
    if (nombre) {
      this.peliculasService.getPeliculaTitle(nombre).subscribe(pelicula => {
        this.pelicula = pelicula;
        this.errorMessage = undefined;
        this.mostrarDetalles = true; 
        this.peliculaForm.patchValue({
          title: pelicula.title,
          director: pelicula.director,
          description: pelicula.description,
          image: pelicula.image
        });
      }, error => {
        console.error('Error al cargar la película:', error);
        this.errorMessage = 'No se pudo cargar la película. Por favor, intenta de nuevo más tarde.'; // Mensaje de error
      });
    }
  }

  actualizarPelicula(): void {
    if (this.peliculaForm.valid && this.pelicula) {
      const updatedPelicula = { ...this.pelicula, ...this.peliculaForm.value };
      this.peliculasService.actualizarPelicula(updatedPelicula).subscribe(() => {
        this.router.navigate(['/peliculas', this.pelicula?.id]);
      });
    }
  }

  eliminarPelicula(): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta película?')) {
      if (this.pelicula && this.pelicula.id) {
        this.peliculasService.eliminarPelicula(this.pelicula.id).subscribe(() => {
          this.router.navigate(['/peliculas']);
        });
      }
    }
  }
}
