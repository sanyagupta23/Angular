import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService],
})
export class NewAccountComponent implements OnInit {
  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {}

  @Output()
  accountAdded = new EventEmitter<{ name: string; status: string }>();

  onCreateAccount(accountName: string, status: string) {
    this.accountAdded.emit({
      name: accountName,
      status: status,
    });
    this.loggingService.logAccountCreated(accountName, status);
  }
}