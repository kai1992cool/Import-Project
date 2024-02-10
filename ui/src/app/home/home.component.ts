import {Component} from '@angular/core';
import {AppModule} from '../app.module';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
  imports: [AppModule],
    styleUrl: './home.component.css'
})
export class HomeComponent {

}
