import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  button = false;
  dasabled = false;

  constructor() { }

  ngOnInit() {
  }
  changeName($event) {
    console.log($event.detail.value);
    this.button = true;
  }
  changeLastName($event) {
    console.log($event.detail.value);
    this.button = true;
  }
  changeBirthDate($event) {
    console.log($event.detail.value);
    this.button = true;
  }
  changeIdentificationNumber($event) {
    console.log($event.detail.value);
    this.button = true;
  }
  changeEmail($event) {
    console.log($event.detail.value);
  }
  changeSex($event) {
    console.log($event.detail.value);
    this.button = true;
  }
  saveData() {
    this.dasabled = true;
    console.log('button');
  }

}
