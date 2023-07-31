import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { Banner1Component } from './banner1/banner1.component';
import { Banner2Component } from './banner2/banner2.component';
import { Banner3Component } from './banner3/banner3.component';
import { Banner4Component } from './banner4/banner4.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../dashboard/header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    BannerComponent,
    Banner1Component,
    Banner2Component,
    Banner3Component,
    Banner4Component,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
