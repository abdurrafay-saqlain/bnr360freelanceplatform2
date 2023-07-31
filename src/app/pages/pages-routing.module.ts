import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { VerificationComponent } from './verification/verification.component';
import { Signup2Component } from './signup2/signup2.component';
import { Signup3Component } from './signup3/signup3.component';
import { Signin1Component } from './signin1/signin1.component';
import { Clientprofile1Component } from './clientprofile1/clientprofile1.component';
import { Clientprofile2Component } from './clientprofile2/clientprofile2.component';
import { ClientprofiledoneComponent } from './clientprofiledone/clientprofiledone.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
