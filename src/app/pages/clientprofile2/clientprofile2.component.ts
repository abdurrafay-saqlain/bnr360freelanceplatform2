import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientprofile2',
  templateUrl: './clientprofile2.component.html',
  styleUrls: ['./clientprofile2.component.css']
})
export class Clientprofile2Component {

  constructor(
    private routes: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ){}


  submit(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.toastr.success('Submitted');
      this.routes.navigate(['client3']);
    }, 1000);
  }
}
