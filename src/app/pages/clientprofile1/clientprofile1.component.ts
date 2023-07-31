import { Component } from '@angular/core';
import { FormControl , FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersDataService } from 'src/app/services/users-data.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-clientprofile1',
  templateUrl: './clientprofile1.component.html',
  styleUrls: ['./clientprofile1.component.css']
})
export class Clientprofile1Component {
  public clientprofileForm!: FormGroup;
  constructor(
    private FormBuilder: FormBuilder,
    private usersdata: UsersDataService,
    private routes: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService

    ){}
  
  
  
  
  
  savedata(): void{

  //  this.usersdata.saveUsersData(this.clientprofileForm.value).subscribe((result)=>{
  //       console.log(result);
  //  });
  try {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.toastr.success('Success');
      this.routes.navigate(['clientprofile2']);
    }, 1000);
  } catch (error) {
    console.log(error);
    
  }


  }



  ngOnInit(): void{
    this.clientprofileForm=this.FormBuilder.group({
      Skills:'',
      Country:'',
      City:'',
      Address:'',
      Laguage:'',
      Description:'',
    })
  }
}
