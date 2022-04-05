import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IonDatetime} from "@ionic/angular";
import { DatePipe } from '@angular/common';

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
  dateValue: any;
  minDate: any

  constructor(private readonly route: ActivatedRoute,
              private readonly http: HttpClient,
              private datePipe: DatePipe) { }

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
    this.dateValue = new Date();
    this.minDate = this.datePipe.transform(this.dateValue, 'yyyy-MM-dd');

  }

  getDescriptionService(): Observable<any> {
    return this.http.get<DocumentType>('./assets/descriptionService.json');
  }
  public getDescription(description) {
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
