import { Injectable } from '@angular/core';

import { Account } from './account';
import { ACCOUNTS } from './mock-accounts';

@Injectable()
export class AccountService {
  getAccounts(): Promise<Account[]> {
    return Promise.resolve(ACCOUNTS);
  }

  getAccount(id: number): Promise<Account> {
    return this.getAccounts()
      .then(accounts => accounts.find(account => account.id === id));
  }
}
