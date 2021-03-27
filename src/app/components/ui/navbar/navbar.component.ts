import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  public isLogged: Boolean = false;
  public isInternalUser: Boolean = false;

  constructor(private authService: AuthService,
    private router: Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }

  ngOnInit(): void {
    console.log('ngOnIint')
    this.isLogged = this.authService.isAuthenticate();
    this.isInternalUser = this.authService.isInternalUser();
  }



  public logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

}
