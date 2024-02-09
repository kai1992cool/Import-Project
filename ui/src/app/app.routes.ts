import {Routes} from '@angular/router';
import {UiComponent} from "../ui/ui.component";
import {AdminComponent} from "../admin/admin.component";

export const routes: Routes = [
  {path: '', component: UiComponent},
  {path: 'admin', component: AdminComponent},
];
