import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDrugComponent } from './add-drug/add-drug.component';
import { SearchDrugComponent } from './search-drug/search-drug.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';
import { SearchComponent } from './search/search.component';
import { LayoutComponent } from './layout/layout.component';

// const routes: Routes = [
//   // Define your routes here
//   { path: 'login', component: LoginComponent},
//   { path: 'add-data', component: AddDrugComponent, canActivate: [AuthGuard] }  
// ];

@NgModule({
  declarations: [
    AppComponent,
    AddDrugComponent,
    SearchDrugComponent,
    LoginComponent,
    SearchComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
