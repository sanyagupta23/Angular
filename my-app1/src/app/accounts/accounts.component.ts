import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers: [AccountService],
})
export class AccountsComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];
  constructor(private accountService: AccountService) {
    this.accounts = this.accountService.accounts;
  }

  ngOnInit(): void {}

  onAccountAdded(newAccount: { name: string; status: string }) {
    this.accountService.addAccount(newAccount.name, newAccount.status);
  }
  onStatusChanged(updateInfo: { id: number; newStatus: string }) {
    this.accountService.updateStatus(updateInfo.id, updateInfo.newStatus);
  }
}