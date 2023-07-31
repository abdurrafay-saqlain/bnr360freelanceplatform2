import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component {
  constructor(
    private routes: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
    ){}

  goto(link: any){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.toastr.success('Role Selected');
      this.routes.navigate([link]);
    }, 1000);
  }

}
