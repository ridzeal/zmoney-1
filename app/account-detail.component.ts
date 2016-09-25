import { Component, Input } from '@angular/core';

import { Account } from './account'

@Component({
  selector: 'account-detail',
  template: `
    <div *ngIf="account">
      <h2>{{account.name}} Account</h2>
      <div><label>id: </label>{{account.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="account.name" placeholder="name">
      </div>
    </div>
    `
})
export class AccountDetailComponent {
  @Input()
  account: Account;
}
