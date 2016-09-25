import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Account } from './account'
import { AccountService } from './account.service';

@Component({
  selector: 'account-detail',
  templateUrl: 'app/account-detail.component.html'
})
export class AccountDetailComponent implements OnInit {
  @Input()
  account: Account;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.accountService.getAccount(id)
        .then(account => this.account = account);
    });
  }

  goBack(): void {
    window.history.back();
  }
}
