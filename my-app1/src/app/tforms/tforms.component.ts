import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tforms',
  templateUrl: './tforms.component.html',
  styleUrls: ['./tforms.component.css'],
})
export class TFormsComponent implements OnInit {
  genders = ['male', 'female'];
  submitted = false;
  user = {
    username: '',
    email: '',
    secret: '',
    gender: '',
  };
  constructor() {}

  ngOnInit(): void {}

  defaultQuestion = 'pet';

  onSubmit(form: NgForm) {
    // console.log(form);
    // console.log(form.value);
    // console.log(form.value.userData);
    this.user.username = form.value.userData.username;
    this.user.email = form.value.userData.email;
    this.user.secret = form.value.secret;
    this.user.gender = form.value.gender;
    this.submitted = true;
    form.reset();
  }
}