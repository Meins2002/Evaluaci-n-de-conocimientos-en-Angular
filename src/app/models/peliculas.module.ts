import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { PeliculaDetalleComponent } from '../pelicula-detalle/pelicula-detalle.component';
import { PeliculaFormularioComponent } from '../pelicula-formulario/pelicula-formulario.component';
import { PeliculaListaComponent } from '../pelicula-lista/pelicula-lista.component';
import { TarjetaPeliculaComponent } from '../tarjeta-pelicula/tarjeta-pelicula.component';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    PeliculaDetalleComponent,
    PeliculaFormularioComponent,
    PeliculaListaComponent,
    TarjetaPeliculaComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PeliculasRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
  ],
  exports: [
    PeliculaDetalleComponent,
    PeliculaFormularioComponent,
    PeliculaListaComponent,
    HeaderComponent,
    TarjetaPeliculaComponent,
    PeliculasRoutingModule,
    HomeComponent 
  ]
})
export class PeliculasModule { }
