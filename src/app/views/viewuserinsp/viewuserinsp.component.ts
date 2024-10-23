import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-viewuserinsp',
  standalone: true,
  imports: [DatePipe,CommonModule],
  templateUrl: './viewuserinsp.component.html',
  styleUrl: './viewuserinsp.component.css'
})
export class ViewuserinspComponent implements OnInit{
  list:any=[]
  constructor(
    private userService:UserService,
  ){

  }
  ngOnInit(): void {
    this.listInspeccion()
  }
  listInspeccion(){
    const dni = window.localStorage.getItem('dni');
    this.userService.listInspeciones(dni).subscribe(
          data=>{
            if(data.success){
              this.list=data.data
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
        this.userService.subirInspeccion(formData,dni).subscribe(
          data=>{
            if(data.success){
              alert(data.message)
              this.listInspeccion()
            }else{
              alert(data.message)
            }
          }
        )
      
    }
  }
}
