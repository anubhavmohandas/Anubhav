import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C3Component } from './c3/c3.component';
import { ParentComponent } from './parent/parent.component';
import { MoviesComponent } from './movies/movies.component';
import { PipesComponent } from './pipes/pipes.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { NgFor } from '@angular/common';
import { ObservablesComponent } from './observables/observables.component';
import { InjectiblesComponent } from './injectibles/injectibles.component';
import { ProductsService } from './products.service';

@Component({ //Decorator
  selector: 'demo',
  standalone: true,
  imports: [RouterOutlet,C3Component, ParentComponent, MoviesComponent, PipesComponent, TableComponentComponent, ObservablesComponent, InjectiblesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers:[ProductsService]
})
// Starts the practice

export class AppComponent {
  title = 'Anubhav';
}
