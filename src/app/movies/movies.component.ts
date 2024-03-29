import { CommonModule, NgClass, NgFor, NgIf, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { movie } from './movie';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor,NgClass, NgIf, FormsModule, NgSwitch, CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies:movie[]=[{name:"3 Idiots", year:2000},{name:"Shaitaan", year:2024},{name:"YJHD", year:2006}]
  // ctrl + space

  showMe:boolean = false;
  num:number = 0;
  // choice:string = "";

}