// import { Component, OnInit } from '@angular/core';
// import { Observable, from, of } from 'rxjs';

// @Component({
//   selector: 'app-observables',
//   standalone: true,
//   imports: [],
//   templateUrl: './observables.component.html',
//   styleUrl: './observables.component.css'
// })
// export class ObservablesComponent implements OnInit{
//   ngOnInit(): void {
//   //   this.myObservable.subscribe({
//   //     next:(val) => console.log(val),
//   //     error:(err) => console.log(err),
//   //     complete:() => console.log('completed')
//   //   })
//   // }
//   // myObservable = new Observable((observer) => {
//   //   console.log('Observable Starts');

//   //   setTimeout(() => observer.next(1),1000)
//   //   setTimeout(() => observer.next(2),1000)
//   //   setTimeout(() => observer.next(3),1000)
//   //   setTimeout(() => observer.next(4),1000)
//   //   observer.next(17)
//     //observer.error('error generated');
    
//     const array1 = [1,2,3,4,5]
//     const array2 = ['a', 'b', 'c', 'd', 'e']
//     // const obsof2 = of(array1, array2)
//     const obsof2 = from(array1)

//     obsof2.subscribe({
//       next:(num:any) => {
//         console.log(num)
//       },
//       error: (err:any) => {
//         console.log("Error in streaming" + err)
//       },
//       complete: () => {
//         console.log('Completed')
//       }
//     })
//   } // )
// }

// Practical 14
import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  evenNumbers: number[] = [];
  message: string = '';

  ngOnInit(): void {
    const randomly = interval(1000).pipe(
      map(() => Math.floor(Math.random() * 1000)),  // Generate random numbers between 0 to 999

      // Filter even numbers
      filter(num => num % 2 === 0),  

      // Take first 10 even numbers => Used to complete the stream
      take(5), 
    );

    randomly.subscribe({
      next: (num: number) => {
        this.evenNumbers.push(num);
      },
      error: (err: any) => {
        this.message = "Error in streaming: " + err;
      },
      complete: () => {
        this.message = 'Stream completed!';
      }
    });
  }

  startStream() {
    this.evenNumbers = []; // Clear previous even numbers
    this.message = ''; // Clear previous messages
  }
}
