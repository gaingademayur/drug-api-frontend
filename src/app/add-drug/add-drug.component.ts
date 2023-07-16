import { Component } from '@angular/core';
import { DrugDataService } from '../service/drug-data.service';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.css']
})
export class AddDrugComponent {
  drugData: any;
  constructor(public drugDataService: DrugDataService) {
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
  }}

