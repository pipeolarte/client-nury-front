import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {MapPage} from '../map/map.page';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openMap() {
    const modal = await this.modalController.create({
      component: MapPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
