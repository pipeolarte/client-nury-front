import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  closeMap() {
    this.modalController.dismiss();
  }

}
