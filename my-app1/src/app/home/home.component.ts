import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  useractivated: boolean;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    console.log('activateFlag: ' + this.useractivated);
    this.userService.activatedEmitter.subscribe((activateFlag) => {
      console.log('activateFlag: ' + activateFlag);
      this.useractivated = activateFlag;
    });
  }

  loadProducts() {
    this.router.navigate(['products'], { relativeTo: this.route });
  }
}