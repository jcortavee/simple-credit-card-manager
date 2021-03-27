import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreditCard } from 'src/app/models/CreditCard';
import { Transaction } from 'src/app/models/Transaction';
import { TransactionType } from 'src/app/models/TransactionType';
import { TransactionTypeService } from 'src/app/services/transaction-type.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {

  public f: FormGroup;
  public transactionTypes: TransactionType[] = [];

  constructor(private transactionTypeService: TransactionTypeService,
    private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.f = new FormGroup({
      creditCardNumber: new FormControl(''),
      cvc: new FormControl(''),
      date: new FormControl(''),
      transactionType: new FormControl(''),
      amount: new FormControl(''),
      description: new FormControl(''),
    });

    this.transactionTypeService.getTransactionTypes()
      .subscribe(response => {
        this.transactionTypes = response.body;
      });
  }

  public onSubmit(f: FormGroup) {
    const transaction = new Transaction();

    transaction.date = f.value.date;
    transaction.description = f.value.description;
    transaction.amount = f.value.amount;
    transaction.transactionType = new TransactionType();
    transaction.transactionType.transactionTypeId = f.value.transactionType;
    transaction.creditCard = new CreditCard();
    transaction.creditCard.creditCardNumber = f.value.creditCardNumber;
    transaction.creditCard.cvc = f.value.cvc;

    this.transactionService.createTransaction(transaction)
      .subscribe(res => {
        console.log(res);
      });
  }

}
