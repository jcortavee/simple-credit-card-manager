import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { CreditCard } from 'src/app/models/CreditCard';
import { CreditCardCategory } from 'src/app/models/CreditCardCategory';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-edit-credit-card',
  templateUrl: './edit-credit-card.component.html',
  styleUrls: ['./edit-credit-card.component.css']
})
export class EditCreditCardComponent implements OnInit {

  public f: FormGroup;
  public id: number = 0;
  public creditCard: CreditCard = new CreditCard();

  constructor(private route: ActivatedRoute,
    private creditCardService: CreditCardService,
    private router: Router) { }

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
          this.f.get('creditCardNumber').setValue(this.creditCard.creditCardNumber);
          this.f.get('cvc').setValue(this.creditCard.cvc);
          this.f.get('expirateDate').setValue(this.creditCard.expirationDate);
        });

    });
  }

  public onSubmit(f: FormGroup) {

    const id = this.creditCard.creditCardId;
    this.creditCard.creditCardNumber = f.value.creditCardNumber;
    this.creditCard.cvc = f.value.cvc;
    this.creditCard.expirationDate = f.value.expirateDate;
    this.creditCard.account = new Account();
    this.creditCard.account.accountId = id;

    this.creditCardService.updateCreditCard(this.creditCard)
      .subscribe(response => {
        this.router.navigate(['/cards']);
      });
  }

}
