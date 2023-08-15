import { Component } from '@angular/core';
import { DrugDataService } from '../service/drug-data.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  title = 'angular-drug-frontend';
  drugData: any;
  searchData: any;
  selectedId: any;

  newName: any;
  newCity: any;
  newGender: any;
  newPassword: any;
  addData: any;

  constructor(public drugDataService: DrugDataService){
    this.drugDataService.drugs().subscribe((data)=>{
      this.drugData = data;
      console.warn("data",data)
    })
  }

  onButtonClick(){
      this.drugDataService.searchDrug(this.selectedId).subscribe((data)=>{
      this.searchData = data;
    })
  }
}
