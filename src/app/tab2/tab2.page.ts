import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  name: string ;
  birthYear: number;
  age: number;

  constructor() {}

  calcAge() {
    this.age = 2021 - this.birthYear;
  }

  reset() {
    this.name = "";
    this.birthYear = undefined;
    this.age = undefined;

  }

  disabled() {
    if (!this.name||!this.birthYear) {
      return true;
    } else return false;
  }
}
