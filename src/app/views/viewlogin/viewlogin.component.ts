import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-viewlogin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './viewlogin.component.html',
  styleUrl: './viewlogin.component.css'
})
export class ViewloginComponent implements OnInit{


  form:FormGroup
  constructor(
    private formBuild:FormBuilder,
    private router:Router,
    private authSErvice:AuthService
  ){
    this.form = this.formBuild.group({
      
      password: ['', [Validators.required]],
      dni: ['', [Validators.required]], // Ejemplo: solo números
      
    });
  }
  ngOnInit(): void {
    
  }
  login(){
    if(this.form.valid){
      this.authSErvice.login(this.form.value).subscribe(
        data=>{
          if(data.success){
            window.localStorage.setItem('dni', this.form.value.dni);
            this.router.navigate(["/user"])
          }else{
            alert(data.message)
          }
        }
      )
    }else{
      alert("Complete los datos")
    }
  }
}