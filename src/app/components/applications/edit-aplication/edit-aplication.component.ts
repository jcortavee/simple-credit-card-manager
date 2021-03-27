import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { AccountStatus } from 'src/app/models/AccountStatus';
import { Application } from 'src/app/models/Application';
import { ApplicationStatus } from 'src/app/models/ApplicationStatus';
import { CreditCard } from 'src/app/models/CreditCard';
import { CreditCardCategory } from 'src/app/models/CreditCardCategory';
import { Customer } from 'src/app/models/Customer';
import { Person } from 'src/app/models/Person';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { AccountService } from 'src/app/services/account.service';
import { ApplicationStatusService } from 'src/app/services/application-status.service';
import { ApplicationService } from 'src/app/services/application.service';
import { CreditCardCategoryService } from 'src/app/services/credit-card-category.service';

@Component({
  selector: 'app-edit-aplication',
  templateUrl: './edit-aplication.component.html',
  styleUrls: ['./edit-aplication.component.css']
})
export class EditAplicationComponent implements OnInit {

  public id: number = 0;
  public applicationStatus: ApplicationStatus[] = [];
  public f: FormGroup;
  public application: Application = new Application();

  constructor(private route: ActivatedRoute,
    private applicationStatusService: ApplicationStatusService,
    private applicationService: ApplicationService,
    private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
    this.f = new FormGroup({
      accountNumber: new FormControl(''),
      cutoffDay: new FormControl(''),
      paymentDay: new FormControl(''),
      minimunPayment: new FormControl(''),
      interestRateWithoutPayment: new FormControl(''),
      limit: new FormControl(''),
      interestRate: new FormControl(''),
      creditCardNumber: new FormControl(''),
      cvc: new FormControl(''),
      expirateDate: new FormControl(''),
      category: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
    });

    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.applicationService.getApplication(this.id)
        .subscribe(response => {
          this.application = response;
          this.f.get('category').setValue(this.application.applicationStatus.applicationStatusId);
        });

    });

    this.applicationStatusService.getApplicationStatus()
      .subscribe(response => {
        this.applicationStatus = response.body;
      });
  }

  public onSubmit(f: FormGroup) {
    const account = new Account();
    account.customer = new Customer();
    this.application.person.user = new User();
    this.application.person.user.username = f.value.username;
    this.application.person.user.password = f.value.password;
    this.application.person.user.role = new Role();
    this.application.person.user.role.roleId = 2;
    this.application.person.user.person = new Person();
    this.application.person.user.person.personId = this.application.person.personId;
    account.customer.person = this.application.person;


    account.accountStatus = new AccountStatus();
    account.accountStatus.accountStatusId = 1;
    
    account.accountNumber = f.value.accountNumber;
    account.cutoffDay = f.value.cutoffDay;
    account.paymentDay = f.value.paymentDay;
    account.limit = f.value.limit;
    account.interestRate = f.value.interestRate;
    account.interestRateWithoutPayment = f.value.interestRateWithoutPayment;
    account.minimunPayment = f.value.minimunPayment;
    account.balance = f.value.balance;
    account.date = new Date();
    account.creditCards = [];

    const creditCard = new CreditCard;
    creditCard.creditCardCategory = new CreditCardCategory();
    creditCard.creditCardCategory.creditCardCategoryId = 1;
    creditCard.creditCardNumber = f.value.creditCardNumber;
    creditCard.cvc = f.value.cvc;
    creditCard.expirationDate = f.value.expirateDate;

    account.creditCards.push(creditCard);

    this.accountService.createAccount(account)
      .subscribe(response => {
        this.router.navigate(['/cards']);
      });
  }

}
