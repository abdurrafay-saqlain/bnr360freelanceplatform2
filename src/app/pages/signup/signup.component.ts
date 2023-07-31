import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersDataService } from 'src/app/services/users-data.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public signupForm!: FormGroup;
  subscribeBtnDisabled: boolean = true;


   constructor(
    private FormBuilder: FormBuilder,
    private authService: AuthService,
    private routes: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
    ){}


   savedata(): void{
    console.log('savedata')
    console.log('submitted form',this.signupForm.value);
    // this.usersdata.saveUsersData(this.signupForm.value).subscribe((result)=>{
    //      console.log(result);
    // });


      try {
        this.spinner.show();
        this.authService.login(this.signupForm.value).subscribe((result)=>{
          console.log(result);
          if(result){
            this.spinner.hide();
            this.routes.navigate(['home']);
          }
     }, err => {
      this.spinner.hide();
      this.toastr.error('Email or password is incorrect');
      console.log(err);
    });
      } catch (error) {
        this.spinner.hide();
        this.toastr.error('Email or password is incorrect');
        console.log(error);
      }
   }




   ngOnInit(): void{
    // this.spinner.show();
    // this.toastr.success('Hello world!');
    this.signupForm=this.FormBuilder.group({
      Emailaddress: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
   }


   get signUpControl() {
    return this.signupForm.controls;
  }

  termConditions(e: any){
      this.subscribeBtnDisabled = !e.target.checked;
  }

  
}
