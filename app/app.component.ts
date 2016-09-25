import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{account.name}} Account</h2>
        <div><label>id: </label>{{account.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="account.name" placeholder="name">
        </div>
        `
})
export class AppComponent {
    title = 'zMoney';
    account: Account = {
        id: 1,
        name: 'Personal'
    };
}

export class Account {
    id: number;
    name: string;
}
