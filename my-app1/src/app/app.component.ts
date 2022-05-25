import { Component } from '@angular/core';
import { AccountService } from './services/account.service';
import { LoggingService } from './services/logging.service';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService, AccountService, UserService],
})
export class AppComponent {
  title = 'my-app1';
}