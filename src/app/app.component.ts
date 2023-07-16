import { Component } from '@angular/core';
import { DrugDataService } from './service/drug-data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  // addDrug(){
  //   this.drugDataService.addDrug(this.newName, this.newCity, this.newGender, this.newPassword).subscribe((data) => {
  //     this.addData = data;
  //   });
  // }
}
