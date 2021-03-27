import { Component, OnInit } from '@angular/core';
import { CutoffService } from 'src/app/services/cutoff.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private cutoffService: CutoffService,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
  }

  public callCutoff() {
    this.cutoffService.calculateCutoff()
      .subscribe(res => {
        console.log(res);
      });
  }

  public callInterest() {
    this.transactionService.calculateInterest()
      .subscribe(res => {
        console.log(res);
      });
  }

}
