import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AdminComponent} from "../admin/admin.component";
import {NavbarComponent} from "../app/navbar/navbar.component";

@Component({
  selector: 'start-Site',
  standalone: true,
  imports: [RouterOutlet, AdminComponent, RouterLink, NavbarComponent],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css'
})
export class UiComponent {

}
