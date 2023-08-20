import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddDrugComponent } from './add-drug/add-drug.component';
import { AuthGuard } from './service/auth.guard';
import { SearchDrugComponent } from './search-drug/search-drug.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'search-drug', component: SearchDrugComponent},
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'add-data', component: AddDrugComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
