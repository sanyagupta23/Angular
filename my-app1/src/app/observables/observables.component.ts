import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit, OnDestroy {

  private customIntervalSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    // this.intervalObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
        if (count === 4) {
          observer.complete();
        }
        if (count > 4) {
          observer.error(new Error('count is greater than 2'));
        }
      }, 2000);
    });

    this.customIntervalSubscription = customIntervalObservable
      .pipe(
        filter((data: number) => {
          return data % 2 === 0;
        }),
        map((data: number) => {
          return 'Round: ' + data;
        })
      )
      .subscribe(
        (count) => {
          console.log(count);
        },
        (error) => {
          console.log('error occurred ->' + error);
        },
        () => {
          console.log('Completed');
        }
      );
  }

  ngOnDestroy(): void {
    // this.intervalObsSubscription.unsubscribe();
    this.customIntervalSubscription.unsubscribe();
  }
}