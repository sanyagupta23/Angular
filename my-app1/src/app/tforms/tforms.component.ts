import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tforms',
  templateUrl: './tforms.component.html',
  styleUrls: ['./tforms.component.css'],
})
export class TFormsComponent implements OnInit {
  genders = ['male', 'female'];
  constructor() {}

  ngOnInit(): void {}

  defaultQuestion = 'pet';
  disabled=true;

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
    console.log(form.value.userData);
    this.disabled=!this.disabled;
  }
}