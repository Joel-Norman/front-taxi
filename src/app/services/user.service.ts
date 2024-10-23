import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../api/host';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URI=api+"/conductor"
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
  info(dni:any){
    return this.http.get<any>(this.URI+"/"+dni);
  }
  subirCarnet(data:any,dni:any){
    return this.http.post<any>(this.URI+"/subir/carnet/"+dni,data);
  }
  subirCedula(data:any,dni:any){
    return this.http.post<any>(this.URI+"/subir/cedula/"+dni,data);
  }
  subirInspeccion(data:any,dni:any){
    return this.http.post<any>(this.URI+"/subir/inspeccion/"+dni,data);
  }
  listInspeciones(dni:any){
    return this.http.get<any>(this.URI+"/inspeciones/"+dni);
  }
  
}
