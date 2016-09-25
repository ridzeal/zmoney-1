import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Account } from './account'

import { AccountService } from './account.service';

@Component({
  selector: 'account-list',
  providers: [AccountService],
  templateUrl: 'app/accounts.component.html',
  styleUrls: ['app/accounts.component.css']
})
export class AccountsComponent implements OnInit {
  title = 'zMoney';
  accounts: Account[];
  selectedAccount: Account;

  constructor(
    private router: Router,
    private accountService: AccountService) {}

  getAccounts(): void {
    this.accountService.getAccounts().then(accounts => this.accounts = accounts);
  }

  ngOnInit(): void {
    this.getAccounts();
  }

  onSelect(account: Account): void {
    this.selectedAccount = account;
  }

  gotoDetail(): void {
    this.router.navigate(['/account', this.selectedAccount.id]);
  }
}
