import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', redirectTo: '/peliculas', pathMatch: 'full' },
  { path: 'peliculas',  loadChildren: () => import('./models/peliculas.module').then(m => m.PeliculasModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
