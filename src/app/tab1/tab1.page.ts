import { Component } from '@angular/core';
import { ActionSheetController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  currentModal = null;
  tittleButtonAddress = 'Cra 92 # 9 - 14';

  constructor(public actionSheetCrtl: ActionSheetController,
              private router: Router) {}

  async marketing() {
    const actionSheet = await this.actionSheetCrtl.create({
      header: 'Promocion valida hasta el 20 de junio',
      buttons:[],
      subHeader: '20% de descuento en servicios de acompañamiento pagando con métodos virtuales (tarjeta de credito).',
      cssClass: 'custom-css',
      animated: true,
      backdropDismiss: true,
      keyboardClose: false,
      mode: 'md'
    });

    actionSheet.present();
    console.log('hola');
  }

  async openSheetModal() {
    console.log('modal');
    const dir1 = 'Cra 92 # 9 - 14';
    const dir2= 'Cra 30 # 10 - 24';
    const actionSheet = await this.actionSheetCrtl.create({
      header: 'Direcciones Guardadas',
      buttons: [
        {
          text: 'Ingresar nueva Dirección',
          icon: 'add-outline',
          handler: () => {
            this.router.navigate(['/address']);
            console.log('agregar dirección');
          }
        },
        {
          text: dir1,
          icon: 'map-outline',
          handler: () => {
            this.tittleButtonAddress = dir1;
            console.log('dirección 1');
          }
        }, {
          text: dir2,
          icon: 'map-outline',
          handler: () => {
            this.tittleButtonAddress = dir2
            console.log('dirección 2');
          }
        }, {}, {}
      ],
      cssClass: 'custom-css',
      animated: true,
      backdropDismiss: true,
      keyboardClose: false,
      mode: 'md'
    });

    actionSheet.present();
  }

}
