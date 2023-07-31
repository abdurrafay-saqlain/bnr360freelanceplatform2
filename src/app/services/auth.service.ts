import { Injectable } from '@angular/core';
import {environment} from '../../../src/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  signin(payload:any){
    const body = {
        "email":payload.Email,
        "password":payload.pwd,
        "name":payload.Firstname + payload.Lastname,
        "password2":payload.repwd
    }
    return this.http.post(environment.apiBaseUrl+"api/user/register/",body);
  }


  login(payload: any){
    const body = {
      "email":payload.Emailaddress,
      "password":payload.password
  }
  return this.http.post(environment.apiBaseUrl+"api/user/login/",body);
  }
}
