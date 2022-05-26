import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css'],
})
export class RFormsComponent implements OnInit {
  genders = ['male', 'female'];
  constructor() {}

  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      gender: new FormControl('female'),
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}