import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Pelicula } from '../models/pelicula';
import { PeliculasService } from '../servicios/peliculas.service';

@Component({
  selector: 'app-pelicula-formulario',
  templateUrl: './pelicula-formulario.component.html',
  styleUrls: ['./pelicula-formulario.component.css']
})
export class PeliculaFormularioComponent implements OnInit {
 
  @Input() pelicula: Pelicula | undefined;
  formulario!: FormGroup;
  errorMessage: string | undefined;

  constructor(private fb: FormBuilder, private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.initFormulario();
  }

  initFormulario(): void {
    this.formulario = this.fb.group({
      title: [this.pelicula?.title || '', Validators.required],
      director: [this.pelicula?.director || '', Validators.required],
      year: [this.pelicula?.year || '', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      description: [this.pelicula?.description || '', Validators.required],
      imageUrl: [this.pelicula?.image || '']
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      const peliculaData = this.formulario.value;
      if (this.pelicula) {
        this.peliculasService.actualizarPelicula({...this.pelicula, ...peliculaData}).subscribe(
          () => {
            console.log('Pelicula actualizada exitosamente');
          },
          error => {
            console.error('Error al actualizar la película:', error);
            this.errorMessage = 'No se pudo actualizar la película. Por favor, intenta de nuevo más tarde.';
          }
        );
      }
    }
  }

  validarAnio(control: AbstractControl): ValidationErrors | null {
    const year = control.value;
    const currentYear = new Date().getFullYear();
    if (isNaN(year) || year < 1900 || year > currentYear) {
      return { invalidYear: true };
    }
    return null;
  }
}