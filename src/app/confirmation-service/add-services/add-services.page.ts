import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ActionSheetController} from "@ionic/angular";

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.page.html',
  styleUrls: ['./add-services.page.scss'],
})
export class AddServicesPage implements OnInit {
  services = {
    injection: {tittle: '', checked: false, disabled: false},
    suture: {tittle: '', checked: false, disabled: false},
    canalization: {tittle: '', checked: false, disabled: false},
    accompaniment: {tittle: '', checked: false, disabled: false},
    personalHygiene: {tittle: '', checked: false, disabled: false},
    nebulization: {tittle: '', checked: false, disabled: false}
  };

  injection = 'Inyección';
  suture = 'Sutura';
  canalization = 'Canalización';
  accompaniment = 'Acompañamiento';
  personalHygiene = 'Higiene Personal';
  nebulization = 'Nebulización';

  constructor(private readonly route: ActivatedRoute,
              public actionSheetCrtl: ActionSheetController,
              private router: Router) { }

  ngOnInit() {
    const initService = this.route.snapshot.queryParamMap.get('service');
    this.services = {
      injection: {tittle: this.injection, checked: this.injection === initService, disabled: this.injection === initService},
      suture: {tittle: this.suture, checked: this.suture === initService, disabled: this.suture === initService},
      canalization: {tittle: this.canalization, checked: this.canalization === initService, disabled: this.canalization === initService},
      accompaniment: {tittle: this.accompaniment, checked: this.accompaniment === initService, disabled: this.accompaniment === initService},
      personalHygiene: {tittle: this.personalHygiene, checked: this.personalHygiene === initService, disabled: this.personalHygiene === initService},
      nebulization: {tittle: this.nebulization, checked: this.nebulization === initService, disabled: this.nebulization === initService}
     }
  }
  async confirmation() {
    const modal = await this.actionSheetCrtl.create({
      header: 'Tu servicio ha sido confirmado',
      buttons:[],
      animated: true,
      backdropDismiss: true
    });
    modal.onDidDismiss()
      .then((data) => {
        this.router.navigate(['/']);
      });
    modal.present();

  }
}
