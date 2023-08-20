import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WaterService {

  constructor() { }
  private minPh = 0;
  private maxPh = 14;

  getPh(){
    return this.minPh-Math.random()*(this.maxPh - this.minPh);
  }

}
