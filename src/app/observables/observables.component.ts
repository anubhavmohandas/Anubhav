import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent implements OnInit{
  ngOnInit(): void {
  //   this.myObservable.subscribe({
  //     next:(val) => console.log(val),
  //     error:(err) => console.log(err),
  //     complete:() => console.log('completed')
  //   })
  // }
  // myObservable = new Observable((observer) => {
  //   console.log('Observable Starts');

  //   setTimeout(() => observer.next(1),1000)
  //   setTimeout(() => observer.next(2),1000)
  //   setTimeout(() => observer.next(3),1000)
  //   setTimeout(() => observer.next(4),1000)
  //   observer.next(17)
    //observer.error('error generated');
    
    const array1 = [1,2,3,4,5]
    const array2 = ['a', 'b', 'c', 'd', 'e']
    // const obsof2 = of(array1, array2)
    const obsof2 = from(array1)

    obsof2.subscribe({
      next:(num:any) => {
        console.log(num)
      },
      error: (err:any) => {
        console.log("Error in streaming" + err)
      },
      complete: () => {
        console.log('Completed')
      }
    })
  } // )
}