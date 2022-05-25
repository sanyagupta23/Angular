import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval,Observable,Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit , OnDestroy{
private intervalSubs:Subscription;
private customIntervalSubscription:Subscription;
  constructor() { }
  
  

  ngOnInit(): void {
    this.intervalSubs = interval(1000).subscribe((count) => {
      console.log(count);
    });

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next('X' + count);
        count++;
      }, 1500);
    });

    this.customIntervalSubscription = customIntervalObservable.subscribe(
      (count) => {
        console.log(count);
      }
    );

}
ngOnDestroy(): void {
  this.intervalSubs.unsubscribe();
  this.customIntervalSubscription.unsubscribe();
}
}
