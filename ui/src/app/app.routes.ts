import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./admin/admin.component";

export const routes: Routes = [
  {path: 'home', title: 'Home', component: HomeComponent},
  {path: 'admin', title: 'Admin', component: AdminComponent},
  {path: '**', redirectTo: 'home'},
];
