import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DrugDataService } from '../service/drug-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // myObserveble: any;
  myObservable!: Observable<number>;

  ngOnInit(){
    this.myObservable = new Observable((observer)=>{
    // =>{
      observer.next(20);
      // const intervalId = setInterval(()=>{
      //   observer.next(count++);
      //   if(count > 5){
      //     observer.complete();
      //     clearInterval(intervalId);
      //   }
      // }, 2000);
      // observer.complete();
    });
  }

  // observer(){
  //   this.observer.complete();
  // }
value2: any;
  start(){
    this.myObservable.subscribe(
      (value)=> {console.log('Next: ', value)
      this.value2 = value;
    },
      (error)=> console.log('Error: ', error),
      ()=> {console.log('Complete');
          }
    );
  }

  constructor(public drugService: DrugDataService, private router: Router){

  }
  username: any
  password: any
  validate: any
  login(){
    console.log(this.username)
    console.log(this.password)
    this.validate = this.drugService.validate();

    // this.validate.observable();

    if(this.validate){
      this.router.navigate(['/search-drug']);
      // this.authenticate(this.username, this.password);
    }
  }
  // authenticate(username: any, password: any){
    
  // }
}
