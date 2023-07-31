import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersDataService } from 'src/app/services/users-data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";




@Component({
  selector: 'app-client3',
  templateUrl: './client3.component.html',
  styleUrls: ['./client3.component.css']
})
export class Client3Component {
  public client3Form!: FormGroup;


  constructor(
    private FormBuilder: FormBuilder,
    private usersdata: UsersDataService,
    private routes: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }



  savedata(): void {
    //console.log('savedata')
    //console.log('submitted form',this.signupForm.value);
    //  this.usersdata.saveUsersData(this.client3Form.value).subscribe((result)=>{
    //       console.log(result);
    //  });
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.toastr.success('OTP verified');
      this.routes.navigate(['clientprofiledone']);
    }, 1000);
  }





  ngOnInit(): void {
    this.client3Form = this.FormBuilder.group({
      CardNumber: '',
      Firstname: '',
      Lastname: '',
      Expirationmonth: '',
      ExpirationYear: '',
      SecurityCode: '',
      Country: '',
      Address: '',
      City: '',
      PostalCode: '',
    })
  }
}
