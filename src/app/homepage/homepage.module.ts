import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { HeaderComponent } from '../homepage/header/header.component'
import { ContentComponent } from './content/content.component';
import { FindworkComponent } from './findwork/findwork.component';
import { MyjobsComponent } from './myjobs/myjobs.component';
import { MystatsComponent } from './mystats/mystats.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    ContentComponent,
    FindworkComponent,
    MyjobsComponent,
    MystatsComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
