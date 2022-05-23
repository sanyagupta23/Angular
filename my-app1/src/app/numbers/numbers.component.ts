import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  numbers=[1,2,3,4,5,5,6];
  status=true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleShow(){
    this.status = !this.status;
  }
  
}
