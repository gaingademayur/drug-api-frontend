import { Component } from '@angular/core';
import { DrugDataService } from '../service/drug-data.service';


@Component({
  selector: 'app-search-drug',
  templateUrl: './search-drug.component.html',
  styleUrls: ['./search-drug.component.css']
})
export class SearchDrugComponent {
  drugData: any;
  constructor(public drugDataService: DrugDataService){
    this.drugDataService.searchDrug(6).subscribe((data)=>{
      this.drugData = data;
      console.warn("data",data)
    })
  }
}
