import { Component } from '@angular/core';

import { booth_rentals } from '../booth_rentals';

@Component({
  selector: 'app-booth-rentals-list',
  templateUrl: './booth-rentals-list.component.html',
  styleUrls: ['./booth-rentals-list.component.css']
})
export class BoothRentalsListComponent {
  booth_rentals = booth_rentals;

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/