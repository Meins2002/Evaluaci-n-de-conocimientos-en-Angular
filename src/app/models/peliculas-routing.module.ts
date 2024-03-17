import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeliculaDetalleComponent } from '../pelicula-detalle/pelicula-detalle.component';
import { PeliculaFormularioComponent } from '../pelicula-formulario/pelicula-formulario.component';
import { PeliculaListaComponent } from '../pelicula-lista/pelicula-lista.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    {
        path:'peliculas',
        children: [
            { path: '', redirectTo: 'pelicula-lista', pathMatch: 'full' },
            { path: 'home', component: HomeComponent},
            { path: 'pelicula-lista', component: PeliculaListaComponent },
            { path: 'pelicula-formulario', component: PeliculaFormularioComponent },
            { path: 'pelicula-detalle/:title', component: PeliculaDetalleComponent },
            
        ]
    }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
