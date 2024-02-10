import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {AdminComponent} from "./admin/admin.component";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [AdminComponent, NavbarComponent],
  imports: [CommonModule, RouterLink, RouterOutlet, RouterModule],
  exports: [AdminComponent, NavbarComponent, CommonModule, RouterLink, RouterOutlet, RouterModule]
})
export class AppModule {
}
