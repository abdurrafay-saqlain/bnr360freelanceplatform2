import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { VerificationComponent } from './verification/verification.component';
import { Signup2Component } from './signup2/signup2.component';
import { Signup3Component } from './signup3/signup3.component';
import { Signin1Component } from './signin1/signin1.component';
import { Clientprofile1Component } from './clientprofile1/clientprofile1.component';
import { Clientprofile2Component } from './clientprofile2/clientprofile2.component';
import { ClientprofiledoneComponent } from './clientprofiledone/clientprofiledone.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Client3Component } from './client3/client3.component';
import { Client4Component } from './client4/client4.component';
import { SellerComponent } from './seller/seller.component';
import { Seller1Component } from './seller1/seller1.component';
import { Seller2Component } from './seller2/seller2.component';
import { Seller3Component } from './seller3/seller3.component';
import { Seller4Component } from './seller4/seller4.component';
import { Seller5Component } from './seller5/seller5.component';
import { Seller6Component } from './seller6/seller6.component';
import { Seller7Component } from './seller7/seller7.component';
import { Signup4Component } from './signup4/signup4.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    VerificationComponent,
    Signin1Component,
    Signup2Component,
    Signup3Component,
    SignupComponent,
    Signin1Component,
    Clientprofile1Component,
    Clientprofile2Component,
    ClientprofiledoneComponent,
    Client3Component,
    Client4Component,
    SellerComponent,
    Seller1Component,
    Seller2Component,
    Seller3Component,
    Seller4Component,
    Seller5Component,
    Seller6Component,
    Seller7Component,
    Signup4Component,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    PagesRoutingModule,
    NgxSpinnerModule,
    NgOtpInputModule
    
  ]
})
export class PagesModule { }
