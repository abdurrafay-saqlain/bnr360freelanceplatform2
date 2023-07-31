import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersDataService } from 'src/app/services/users-data.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  public signinForm!: FormGroup;
  constructor(private FormBuilder: FormBuilder,private routes: Router, private authService:AuthService){} 
  savedata(): void{
   console.log('savedata')
   console.log('submitted form',this.signinForm.value);
  //   this.usersdata.saveUsersData(this.signinForm.value).subscribe((result)=>{
  //        console.log(result);
  //  });
   try {
    this.authService.signin(this.signinForm.value).subscribe((result)=>{
      console.log(result);
      if(result){
        this.routes.navigate(['verification'])
      }
 }, error => {
  console.log(error);
 });
   } catch (error) {
    console.log(error);
    
   }
  }
  ngOnInit(): void{
    this.signinForm=this.FormBuilder.group({
      Firstname:'',
      Lastname:'',
      Email:'',
      pwd:'',
      reEmail:'',
      repwd:''
  })
  }
}
