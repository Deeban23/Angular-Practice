import { Component, NgZone } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //showHeader: boolean = true;
  //showHeader: boolean = false;
  // constructor(private router: Router) {
  //   router.events.subscribe((val) => {
  //     if (val instanceof NavigationEnd) {
  //       if (val.url == '/login') {
  //         this.showHeader = false;
  //       }
  //     }
  //   });
  // router.events.forEach((event) => {
  //   if (event instanceof NavigationStart) {
  //     if (event['url'] == '/login') {
  //       this.showHeader = false;
  //     } else {
  //       // console.log("NU")
  //       this.showHeader = true;
  //     }
  //   }
  // });
}
