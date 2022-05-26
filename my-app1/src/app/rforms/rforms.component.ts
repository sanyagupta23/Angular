import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css'],
})
export class RFormsComponent implements OnInit {
  genders = ['male', 'female'];
  constructor() {}

  signUpForm: FormGroup;

  ngOnInit(): void {}
}