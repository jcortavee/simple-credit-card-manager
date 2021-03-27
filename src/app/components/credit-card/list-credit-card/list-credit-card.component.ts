import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/CreditCard';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-list-credit-card',
  templateUrl: './list-credit-card.component.html',
  styleUrls: ['./list-credit-card.component.css']
})
export class ListCreditCardComponent implements OnInit {

  public creditCards: CreditCard[] = [];

  constructor(private creditCardService: CreditCardService) { }

  ngOnInit(): void {
    this.creditCardService.getCreditCards()
      .subscribe(response => {
        this.creditCards = response.body;
      });
  }

}
