import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService],
})
export class AccountComponent implements OnInit {
  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {}

  @Input()
  account: {
    name: string;
    status: string;
  };

  @Input()
  id: number = 0;

  @Output()
  statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();

  changeStatus(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    this.loggingService.logStatusChange(status);
  }
}