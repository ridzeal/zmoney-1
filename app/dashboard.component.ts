import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Account } from './account';
import { AccountService } from './account.service';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accounts: Account[] = [];

  constructor(
    private router: Router,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAccounts()
      .then(accounts => this.accounts = accounts.slice(0,3));
  }

  gotoDetail(account: Account): void {
    let link = ['/account', account.id];
    this.router.navigate(link);
  }
}
