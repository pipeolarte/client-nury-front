import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  button = false;

  constructor() { }

  ngOnInit() {
  }
  changeName($event) {
    console.log($event.detail.value);
    this.button = true;
  }
  changeLastName($event) {
    console.log($event.detail.value);
  }
  changeBirthDate($event) {
    console.log($event.detail.value);
  }
  changeIdentificationNumber($event) {
    console.log($event.detail.value);
  }
  changeEmail($event) {
    console.log($event.detail.value);
  }
  changeSex($event) {
    console.log($event.detail.value);
  }
  saveData() {
    console.log('button');
  }

}
