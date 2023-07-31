import { Component } from '@angular/core';
import {FormBuilder,FormGroup,FormControl} from '@angular/forms'
import {UsersDataService} from './services/users-data.service'
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-signup';
}