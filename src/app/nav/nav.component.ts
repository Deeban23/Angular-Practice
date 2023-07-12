import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  @Input() public isUserLoggedIn: boolean;
  constructor(private router: Router) {}
  public onLogoutClick() {
    this.router.navigate(['']);
  }
}
