import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Application } from 'src/app/models/Application';
import { ApplicationStatus } from 'src/app/models/ApplicationStatus';
import { CreditCardCategory } from 'src/app/models/CreditCardCategory';
import { Person } from 'src/app/models/Person';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';
import { ApplicationService } from 'src/app/services/application.service';
import { CreditCardCategoryService } from 'src/app/services/credit-card-category.service';
import { PersonService } from 'src/app/services/person.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  public f: FormGroup;

  constructor(private personService: PersonService) { }

  ngOnInit(): void {

    this.f = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      dpi: new FormControl(''),
      nit: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      birthdate: new FormControl(''),
      address: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  public onSubmit(f: FormGroup) {
    const person = new Person();
    person.firstName = f.value.firstName;
    person.lastName = f.value.lastName;
    person.dpi = f.value.dpi;
    person.nit = f.value.nit;
    person.phoneNumber = f.value.phoneNumber;
    person.email = f.value.email;
    person.birthdate = f.value.birthdate;
    person.address = f.value.address;
    person.salary = null;
    person.user = new User();
    person.user.role = new Role();
    person.user.role.roleId = 1;
    person.user.username = f.value.username;
    person.user.password = f.value.password;

    this.personService.createPerson(person)
      .subscribe(response => {
        console.log(response)
      });
  }

}
