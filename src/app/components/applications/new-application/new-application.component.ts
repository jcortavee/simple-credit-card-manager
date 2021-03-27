import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Application } from 'src/app/models/Application';
import { ApplicationStatus } from 'src/app/models/ApplicationStatus';
import { CreditCardCategory } from 'src/app/models/CreditCardCategory';
import { Person } from 'src/app/models/Person';
import { ApplicationService } from 'src/app/services/application.service';
import { CreditCardCategoryService } from 'src/app/services/credit-card-category.service';

@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.css']
})
export class NewApplicationComponent implements OnInit {

  public f: FormGroup;
  public categories: CreditCardCategory[] = [];

  constructor(private creditCardCategoryService: CreditCardCategoryService,
    private applicationService: ApplicationService,
    private router: Router) { }

  ngOnInit(): void {
    this.creditCardCategoryService.getCreditCardCategories()
      .subscribe(response => {
        this.categories = response.body;
      });

    this.f = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      dpi: new FormControl(''),
      nit: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      birthdate: new FormControl(''),
      address: new FormControl(''),
      salary: new FormControl(''),
      category: new FormControl(''),
    });
  }

  public onSubmit(f: FormGroup) {
    const application = new Application();
    application.person = new Person();
    application.person.firstName = f.value.firstName;
    application.person.lastName = f.value.lastName;
    application.person.dpi = f.value.dpi;
    application.person.nit = f.value.nit;
    application.person.phoneNumber = f.value.phoneNumber;
    application.person.email = f.value.email;
    application.person.birthdate = f.value.birthdate;
    application.person.address = f.value.address;
    application.person.salary = f.value.salary;
    application.person.personId = null;
    application.applicationId = null;
    application.date = new Date();
    application.creditCardCategory = new CreditCardCategory();
    application.creditCardCategory.creditCardCategoryId = f.value.category;
    application.applicationStatus = new ApplicationStatus();
    application.applicationStatus.applicationStatusId = 1;

    this.applicationService.createApplication(application)
      .subscribe(response => {
        this.router.navigate(['/login']);
      });
  }

}
