import { Injectable } from '@angular/core';
import { FeathersService } from './feathers.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private feathers: FeathersService) {
  }

  getUpdate( updateKey: string ) {
    return (<any>this.feathers // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
      .service('updates'))
      .watch()
      .find({
        query: {
          updateKey,
          $limit: 1
        }
      });
  }

  getConfirm( confirmKey: string ) {
    return (<any>this.feathers // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
                     .service('emailconfirms'))
                     .watch()
                     .find({
                       query: {
                         confirmKey,
                         $limit: 1
                       }
                     });
  }

  createUpdate(email: string, captcha: string) {
    if (email === '' || captcha === '') {
      return;
    }

    // feathers-reactive Observables are hot by default,
    // so we don't need to subscribe to make create() happen.
    this.feathers
        .service('updates')
        .create({
          email,
          captcha
        });
  }

  updateContact(model) {
    this.feathers
        .service('emailconfirms')
        .create({
          email: model.email,
          updateKey: model.updateKey
        });
    this.feathers
        .service('phoneconfirms')
        .create({
          phone: model.phone,
          updateKey: model.updateKey
        });
  }


}
