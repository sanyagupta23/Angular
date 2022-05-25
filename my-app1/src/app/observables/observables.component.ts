import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval,Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit , OnDestroy{
private intervalSubs:Subscription;
  constructor() { }
  

  ngOnInit(): void {
    this.intervalSubs = interval(1000).subscribe((count) => {
      console.log(count);
    });
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

}
