import { DatePipe, NgFor } from '@angular/common';
import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { api } from '../../api/host';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-viewadminuser',
  standalone: true,
  imports: [DatePipe,NgFor],
  templateUrl: './viewadminuser.component.html',
  styleUrl: './viewadminuser.component.css'
})
export class ViewadminuserComponent implements OnInit{
  list:any=[]
  private modalService = inject(NgbModal);
  pathArchivo:any=""
  constructor(
    private adminService:AdminService,
    private sanitizer: DomSanitizer
  ){

  }


  ngOnInit(): void {
    this.listUser()
  }
  listUser(){
    this.adminService.listUsers().subscribe(
      data=>{
        if(data.success){
          this.list=data.data;
        }
      }
    )
  }
  accion(status:any,item:any){
    this.adminService.accionUser({id:item.id,status:status}).subscribe(
      data=>{
        if(data.succcess){
          alert(data.message)
          this.listUser()
        }else{
          alert(data.message)
        }
      }
    )
  }
  
  open(content: TemplateRef<any>,item:any) {
    
    this.pathArchivo=this.sanitizer.bypassSecurityTrustResourceUrl(api+"/admin/view/"+item.carnet);
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			
		);
	}
  open2(content: TemplateRef<any>,item:any) {
    
    this.pathArchivo=this.sanitizer.bypassSecurityTrustResourceUrl(api+"/admin/view/"+item.cedula)
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			
		);
	}
}
