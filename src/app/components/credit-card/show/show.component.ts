import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { CreditCard } from 'src/app/models/CreditCard';
import { Cutoff } from 'src/app/models/Cutoff';
import { Transaction } from 'src/app/models/Transaction';
import { AccountService } from 'src/app/services/account.service';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public id: number = 0;
  public creditCard: CreditCard = new CreditCard();

  public date = new Date();

  public account: Account = new Account();
  public transactions: Transaction[] = [];
  public cutoff: Cutoff = new Cutoff();

  constructor(
    private route: ActivatedRoute,
    private creditCardService: CreditCardService,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.creditCardService.getCreditCard(this.id)
        .subscribe(response => {
          this.creditCard = response;
          console.log(this.creditCard)

          this.accountService.getAccount(this.creditCard.account.accountId)
            .subscribe(response => {
              this.account = response;
              console.log(this.account.creditCards[0].account);

              this.cutoff = this.account.cutoffs[0];

              this.transactions = this.account.creditCards[0].account.transactions;
            });
        });

    });
  }

  public getMonth() {
    if (this.creditCard.account.cutoffDay < this.date.getDate())
      return this.date.getMonth() + 2;
    else
      return this.date.getMonth() + 1;
  }

  public getMonthPayment() {
    if (this.creditCard.account.paymentDay < this.date.getDate())
      return this.date.getMonth() + 2;
    else
      return this.date.getMonth() + 1;
  }

}
