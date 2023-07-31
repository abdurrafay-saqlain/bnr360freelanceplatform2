import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './dashboard/banner/banner.component';
import { Banner1Component } from './dashboard/banner1/banner1.component';
import { Banner2Component } from './dashboard/banner2/banner2.component';
import { Banner3Component } from './dashboard/banner3/banner3.component';
import { Banner4Component } from './dashboard/banner4/banner4.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { Signup2Component } from './pages/signup2/signup2.component';
import { Signup3Component } from './pages/signup3/signup3.component';
import { Signin1Component } from './pages/signin1/signin1.component';
import { Clientprofile1Component } from './pages/clientprofile1/clientprofile1.component';
import { Clientprofile2Component } from './pages/clientprofile2/clientprofile2.component';
import { ClientprofiledoneComponent } from './pages/clientprofiledone/clientprofiledone.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Client3Component } from './pages/client3/client3.component';
import { Client4Component } from './pages/client4/client4.component';
import { SellerComponent } from './pages/seller/seller.component';
import { Seller1Component } from './pages/seller1/seller1.component';
import { Seller2Component } from './pages/seller2/seller2.component';
import { Seller3Component } from './pages/seller3/seller3.component';
import { Seller4Component } from './pages/seller4/seller4.component';
import { Seller5Component } from './pages/seller5/seller5.component';
import { Seller6Component } from './pages/seller6/seller6.component';
import { Seller7Component } from './pages/seller7/seller7.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FindworkComponent } from './homepage/findwork/findwork.component';
import { MyjobsComponent } from './homepage/myjobs/myjobs.component';
import { MystatsComponent } from './homepage/mystats/mystats.component';
import { MessagesComponent } from './homepage/messages/messages.component';
import { Signup4Component } from './pages/signup4/signup4.component';


const routes: Routes = [
  {
    path:'signin', component:SigninComponent
  },
  {
    path:'' , component:DashboardComponent
  },
  {
    path:'signup' , component:SignupComponent
  },
  {
    path:'home', component:HomepageComponent
  },
  {
    path:'findwork', component:FindworkComponent
  },
  {
    path:'myjob', component:MyjobsComponent
  },
  {
    path:'mystat', component:MystatsComponent
  },
  {
    path:'message', component:MessagesComponent
  },
  {
    path:'signup-next' , component:Signup2Component
  },
  {
    path:'signup-final' , component:Signup3Component
  },
  {
    path:'signup4' , component:Signup4Component
  },
  {
    path:'clientprofiledone' , component:ClientprofiledoneComponent
  },
  {
    path:'client3' , component:Client3Component
  },
  {
    path:'client4' , component:Client4Component
  },
  {
    path:'clientprofile1' , component:Clientprofile1Component
  },
  {
    path:'clientprofile2' , component:Clientprofile2Component
  },
  {
    path:'verification' , component:VerificationComponent
  },
  {
    path:'seller' , component:SellerComponent
  },
  {
    path:'seller1' , component:Seller1Component
  },
  {
    path:'seller2' , component:Seller2Component
  },
  {
    path:'seller3' , component:Seller3Component
  },
  {
    path:'seller4' , component:Seller4Component
  },
  {
    path:'seller5' , component:Seller5Component
  },
  {
    path:'seller6' , component:Seller6Component
  },
  {
    path:'seller7' , component:Seller7Component
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
