import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { CreditCard } from 'src/app/models/CreditCard';
import { CreditCardCategory } from 'src/app/models/CreditCardCategory';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-new-credit-card',
  templateUrl: './new-credit-card.component.html',
  styleUrls: ['./new-credit-card.component.css']
})
export class NewCreditCardComponent implements OnInit {

  public f: FormGroup;
  public id: number = 0;
  public creditCard: CreditCard = new CreditCard();

  constructor(private route: ActivatedRoute,
    private creditCardService: CreditCardService) { }

  ngOnInit(): void {
    this.f = new FormGroup({
      creditCardNumber: new FormControl(''),
      cvc: new FormControl(''),
      expirateDate: new FormControl(''),
    });

    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.creditCardService.getCreditCard(this.id)
        .subscribe(response => {
          this.creditCard = response;
        });

    });
  }

  public onSubmit(f: FormGroup) {

    const creditCard = new CreditCard();
    creditCard.creditCardCategory = new CreditCardCategory();
    creditCard.creditCardCategory.creditCardCategoryId = this.creditCard.creditCardCategory.creditCardCategoryId;
    creditCard.creditCardNumber = f.value.creditCardNumber;
    creditCard.account = new Account();
    creditCard.account.accountId = this.creditCard.account.accountId;
    creditCard.cvc = f.value.cvc;
    creditCard.expirationDate = f.value.expirateDate;
    creditCard.parentCreditCard = new CreditCard();
    creditCard.parentCreditCard.creditCardId = this.creditCard.creditCardId;


    this.creditCardService.createCreditCard(creditCard)
      .subscribe(response => {
        console.log(response)
      });
  }

}
