import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IonDatetime} from "@ionic/angular";

@Component({
  selector: 'app-confirmation-service',
  templateUrl: './confirmation-service.page.html',
  styleUrls: ['./confirmation-service.page.scss'],
})
export class ConfirmationServicePage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  tittle = '';
  description = '';
  imgRoute = '';
  dateValue = '';

  constructor(private readonly route: ActivatedRoute,
              private readonly http: HttpClient) { }

  ngOnInit() {
    const serviceParam = this.route.snapshot.queryParamMap.get('service');
    this.tittle = serviceParam;
    const service = this.getDescription(serviceParam);
    this.imgRoute = '../../assets/'+`${service}`+'.jpg';
    this.getDescriptionService().subscribe({
        next: (description) => {
          this.description = description.service[service];
        }
      });

  }

  getDescriptionService(): Observable<any> {
    return this.http.get<DocumentType>('./assets/descriptionService.json');
  }
  getDescription(description) {
    switch (description) {
      case 'Sutura':
        return 'suture'
      case 'Inyección':
        return 'injection'
      case 'Canalización':
        return 'canalization'
      case 'Acompañamiento':
        return 'accompaniment'
      case 'Higiene Personal':
        return 'personalHygiene'
      case 'Nebulización':
        return 'nebulization'
    }
  }

}
