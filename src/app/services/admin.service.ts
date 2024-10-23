import { Injectable } from '@angular/core';
import { api } from '../api/host';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  URI=api+"/admin"
  user={
    id:"",
	  name:"",
	  surname:"",
	  dni:"",
	  vehiculo:{
      id:"",
      patente:"",
      marca:"",
      modelo:"",
      cedula:"",
    },
	  status:"",
  }
  constructor(
    private http:HttpClient
  ) { }
  
  accionUser(data:any){
    return this.http.post<any>(this.URI+"/accion/user",data);
  }
  accionInspeccion(data:any){
    return this.http.post<any>(this.URI+"/accion/inspeccion",data);
  }
  
  listUsers(){
    return this.http.get<any>(this.URI+"/users");
  }
  listInspecciones(){
    return this.http.get<any>(this.URI+"/inspeccion");
  }

  
}