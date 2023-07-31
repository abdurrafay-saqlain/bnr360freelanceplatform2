import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
url="http://localhost:4200/signup"
  constructor(private http:HttpClient) { }
  users()
  {
    return this.http.get(this.url);
  }
  saveUsersData(data: any){
    console.log(data);
    return this.http.post(this.url, data)
  }
}
