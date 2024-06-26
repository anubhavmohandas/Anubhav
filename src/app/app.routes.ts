import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { PipesComponent } from './pipes/pipes.component';
import { C3Component } from './c3/c3.component';

export const routes: Routes = [
    { path: 'movies', component:MoviesComponent},
    // { path:'pipes', component:PipesComponent},
    { path:'c3', component:C3Component},
    { path:'', component:PipesComponent}, // it will start by default. 
    // {path:'login', redirectTo: 'PipesComponent'}
    {path:'login', redirectTo: 'c3'},
    // this will redirect to c3
    {path:'**', redirectTo: '/login'}
    // Wild card, as if someone is trying to do something with the URL, then it will be taken to login page. (behavious of website)
];

// ng g c componentname