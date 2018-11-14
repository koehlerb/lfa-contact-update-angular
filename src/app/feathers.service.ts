import { Injectable } from '@angular/core';

import * as feathersRx from 'feathers-reactive';

import feathers from '@feathersjs/feathers';
import feathersRESTClient from '@feathersjs/rest-client';

@Injectable({
  providedIn: 'root'
})
export class FeathersService {


  private _feathers = feathers();                     // init feathers
  //private _rest = feathersRESTClient('http://localhost:3030/api');
  private _rest = feathersRESTClient(
    location.hostname == "localhost" ?
      'http://localhost:3030/api' :
      location.protocol + '//' + location.host + '/api'
  );

  constructor() {
    console.log(
       "API url: " +
       (location.hostname == "localhost" ?
          'http://localhost:3030/api' :
          location.protocol + '//' + location.host + '/api')
    );
    this._feathers
      .configure(this._rest.fetch(window.fetch))  // add socket.io plugin
      .configure(feathersRx({                     // add feathers-reactive plugin
        idField: '_id'
      }));
  }

  // expose services
  public service(name: string) {
    return this._feathers.service(name);
  }
}
