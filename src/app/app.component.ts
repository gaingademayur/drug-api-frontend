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
 

  // addDrug(){
  //   this.drugDataService.addDrug(this.newName, this.newCity, this.newGender, this.newPassword).subscribe((data) => {
  //     this.addData = data;
  //   });
  // }
}
