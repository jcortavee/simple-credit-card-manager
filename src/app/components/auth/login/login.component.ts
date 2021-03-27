import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public f: FormGroup;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.f = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  public onSubmit(f: FormGroup) {
    this.authService.auth(f.value.username, f.value.password)
      .subscribe(response => {
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/logout']);
      });
  }

}
