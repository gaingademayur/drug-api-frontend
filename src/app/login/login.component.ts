import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DrugDataService } from '../service/drug-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(public drugService: DrugDataService, private router: Router){

  }
  username: any
  password: any
  validate: any
  login(){
    console.log(this.username)
    console.log(this.password)
    this.validate = this.drugService.validate();
    if(this.validate){
      this.router.navigate(['/add-data']);
      // this.authenticate(this.username, this.password);
    }
  }
  // authenticate(username: any, password: any){
    
  // }
}
