import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  accounts = [
    {
      name: 'Master Account',
      status: 'Active',
    },
    {
      name: 'Test Account',
      status: 'InActive',
    },
    {
      name: 'Hidden Account',
      status: 'Unknown',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onAccountAdded(newAccount: { name: string; status: string }) {
    this.accounts.push(newAccount);
  }
  onStatusChanged(updateInfo: { id: number; newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}