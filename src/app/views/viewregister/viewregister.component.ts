import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-viewregister',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './viewregister.component.html',
  styleUrl: './viewregister.component.css'
})
export class ViewregisterComponent implements OnInit{


  form:FormGroup
  constructor(
    private formBuild:FormBuilder,
    private router:Router,
    private authSErvice:AuthService
  ){
    this.form = this.formBuild.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      dni: ['', [Validators.required]], // Ejemplo: solo números
      patente: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
    
  }
  register(){
    if(this.form.valid){
      this.authSErvice.register(this.form.value).subscribe(
        data=>{
          if(data.success){
            this.router.navigate(["/login"])
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
