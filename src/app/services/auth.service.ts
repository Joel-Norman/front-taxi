import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../api/host';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URI=api+"/auth"
  constructor(
    private http:HttpClient
  ) { }

  register(data:any){
    return this.http.post<any>(this.URI+"/register",data);
  }
  login(data:any){
    return this.http.post<any>(this.URI+"/login",data);
  }
}
