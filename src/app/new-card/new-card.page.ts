import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.page.html',
  styleUrls: ['./new-card.page.scss'],
})
export class NewCardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  expirationDate($event) {
    console.log($event.detail);
  }
  cardNumber($event) {
    const number = String($event.detail.value);
    if(number.length === 16) {
      const lastDigitCard = number.slice(-4);
      console.log(lastDigitCard);
    }
  }
  securityCode($event) {
    const code = $event.detail.value;
    console.log('code: %s', code);
  }

}
