import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DrugDataService } from '../service/drug-data.service';
import { WaterService } from '../service/water.service';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.css']
})
export class AddDrugComponent implements OnInit {
  drugData: any;
  phObserverable!: Observable<number>;
  ngOnInit() {
    this.phObserverable = new Observable((observer) => {
      // console.log('from service'+this.waterService.getPh())
      let count = 0;
      const intervalId = setInterval(() => {
        observer.next(this.waterService.getPh());
      }, 2500)
    })
  }
  constructor(public drugDataService: DrugDataService, public waterService: WaterService) {
    // this.drugDataService.addDrug(7, 'Mayur').subscribe((data)=>{ //   this.drugData = data;    // })
  }
  newName: any; compname: any; molucularfor: any; structure: any; molucularwt: any;
  smile: any;
  phycheproperties: any;
  genus: any;
  newPassword: any;
  speciesname: any;
  family: any;
  geolocation: any;
  chemicalclassification: any;
  meltingpoint: any;
  massspectra: any;
  msms: any;
  uv: any;
  irspector: any;
  hmnr: any;
  cmnr: any;
  hplc: any;
  activity: any;
  toxicity: any;
  clinicaltrial: any;
  afi: any;
  reference: any;
  addData: any;

  addDrug() {
    console.log(this.newName)
    this.drugDataService.addDrug(this.compname, this.molucularfor, this.structure, this.molucularwt, this.smile, this.phycheproperties, this.genus, this.speciesname,
      this.family, this.geolocation, this.chemicalclassification, this.meltingpoint, this.massspectra, this.msms, this.uv, this.irspector, this.hmnr, this.cmnr,
      this.hplc, this.activity, this.toxicity, this.clinicaltrial, this.afi, this.reference).subscribe((data) => {
        this.addData = data;
      });
  }
  phValue: any
  getPh() {
    this.phObserverable.subscribe((value) => {
      console.log(value);
      this.phValue = value;
    }, (error) => {
      console.log(error);
    }, () => {
      console.log('complete')
    });
  }



}