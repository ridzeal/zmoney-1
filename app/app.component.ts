import { Component } from '@angular/core';

import { Account } from './account'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>

    <h2>My Accounts</h2>
    <ul class="accounts">
      <li *ngFor="let account of accounts"
          (click)="onSelect(account)"
          [class.selected]="account === selectedAccount">
        <span class="badge">{{account.id}}</span> {{account.name}}
      </li>
    </ul>

    <account-detail [account]="selectedAccount"></account-detail>
    `,
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .accounts {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .accounts li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .accounts li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .accounts li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .accounts .text {
        position: relative;
        top: -3px;
      }
      .accounts .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `]
})
export class AppComponent {
  title = 'zMoney';
  accounts = ACCOUNTS;
  selectedAccount: Account;
  onSelect(account: Account): void {
    this.selectedAccount = account;
  }
}

const ACCOUNTS: Account[] = [
  { id: 1, name: 'Personal' },
  { id: 2, name: 'Bank 1' },
  { id: 3, name: 'Bank 2' },
  { id: 4, name: 'Deposit Investment' }
];
