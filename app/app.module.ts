import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { AccountDetailComponent } from './account-detail.component';
import { AccountsComponent } from './accounts.component';
import { DashboardComponent } from './dashboard.component';
import { AccountService } from './account.service';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    AccountDetailComponent,
    AccountsComponent,
    DashboardComponent
  ],
  providers: [
    AccountService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
