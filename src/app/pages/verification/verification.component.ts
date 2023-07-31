import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  public otp: string = ''; 
  showOtpComponent = true;
  numbers: any;
  verifyBtnDisabled: boolean = true;
  otpFailed: boolean = false;
  config = { allowNumbersOnly: false, length: 4, isPasswordInput: true, disableAutoFocus: false, placeholder: "", inputStyles: { width: "50px", margin: '0 10px', height: "50px", border: '1px solid black', color: 'black' }, };
  configErr = { allowNumbersOnly: false, length: 4, isPasswordInput: true, disableAutoFocus: false, placeholder: "", inputStyles: { width: "50px", margin: '0 10px', height: "50px", border: '1px solid red', color: 'red' }, };



  constructor(
    private routes: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService){}
  

  goto(link: any){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.toastr.success('OTP verified');
      this.routes.navigate([link]);
    }, 1000);
  }


  onOtpChange(e: any) {
    this.numbers = e;
    if (this.numbers.length == 4) {
      this.verifyBtnDisabled = false;
    } else {
      this.verifyBtnDisabled = true;
    }
  }
}
