import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/Application';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-list-aplication',
  templateUrl: './list-aplication.component.html',
  styleUrls: ['./list-aplication.component.css']
})
export class ListAplicationComponent implements OnInit {

  public applications: Application[] = [];

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.applicationService.getApplications()
      .subscribe(response => {
        this.applications = response.body;
      });
  }

}
