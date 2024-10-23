import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-viewinfo',
  standalone: true,
  imports: [NgIf],
  templateUrl: './viewinfo.component.html',
  styleUrl: './viewinfo.component.css'
})
export class ViewinfoComponent implements OnInit{
  user={
    id:"",
	  name:"asfasdfa",
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
    private router:Router,
    private authSErvice:AuthService,
    private userService:UserService,
  ){
    
  }
  ngOnInit(): void {
    const dni = window.localStorage.getItem('dni');
    this.userService.info(dni).subscribe(
      data=>{
        if(data.success){
          console.log(data)
          this.user=data.data
        }
      }
    )
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
        formData.append('file', file);
        const dni = window.localStorage.getItem('dni');
        this.userService.subirCarnet(formData,dni).subscribe(
          data=>{
            if(data.success){
              alert(data.message)
            }else{
              alert(data.message)
            }
          }
        )
      
    }
  }
  onFileSelected2(event: any) {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
        formData.append('file', file);
        const dni = window.localStorage.getItem('dni');
        this.userService.subirCedula(formData,dni).subscribe(
          data=>{
            if(data.success){
              alert(data.message)
            }else{
              alert(data.message)
            }
          }
        )
      
    }
  }
  
  
}