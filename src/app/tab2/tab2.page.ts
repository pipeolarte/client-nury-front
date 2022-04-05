import { Component } from '@angular/core';
import {ActionSheetController} from "@ionic/angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public actionSheetCrtl: ActionSheetController) {}

  async infoAccount() {
    const actionSheet = await this.actionSheetCrtl.create({
      header: 'Comunicate con nosotros',
      buttons:[],
      subHeader: 'Tel: 8000 000 000',
      cssClass: 'custom-css',
      animated: true,
      backdropDismiss: true,
      keyboardClose: false,
      mode: 'md'
    });

    actionSheet.present();
  }
  async infoLastService() {
    const actionSheet = await this.actionSheetCrtl.create({
      header: 'Comunicate con nosotros',
      buttons:[],
      subHeader: 'Tel: 8000 000 000',
      cssClass: 'custom-css',
      animated: true,
      backdropDismiss: true,
      keyboardClose: false,
      mode: 'md'
    });

    actionSheet.present();
  }

}
