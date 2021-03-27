import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/CreditCard';
import { User } from 'src/app/models/User';
import { CreditCardService } from 'src/app/services/credit-card.service';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.css']
})
export class MyCardsComponent implements OnInit {

  public creditCards: CreditCard[] = [];

  constructor(private creditCardService: CreditCardService) { }

  ngOnInit(): void {
    const userId: User = JSON.parse(localStorage.getItem('user'));
    this.creditCardService.getMyCreditCards(userId.userId)
      .subscribe(response => {
        this.creditCards = response.body;
      });
  }

}
