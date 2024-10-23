import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { api } from '../../api/host';
import { DatePipe, NgFor } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-viewadmininspec',
  standalone: true,
  imports: [DatePipe,NgFor],
  templateUrl: './viewadmininspec.component.html',
  styleUrl: './viewadmininspec.component.css'
})
export class ViewadmininspecComponent implements OnInit{
  list:any=[]
  private modalService = inject(NgbModal);
  pathArchivo:any=""
  constructor(
    private adminService:AdminService,
    private sanitizer: DomSanitizer
  ){

  }


  ngOnInit(): void {
    this.listInspeciones()
  }
  listInspeciones(){
    this.adminService.listInspecciones().subscribe(
      data=>{
        if(data.success){
          console.log(data)
          this.list=data.data;
        }
      }
    )
  }
  accion(status:any,item:any){
    this.adminService.accionInspeccion({id:item.id,status:status}).subscribe(
      data=>{
        if(data.succcess){
          alert(data.message)
          this.listInspeciones()
        }else{
          alert(data.message)
        }
      }
    )
  }
  
  open(content: TemplateRef<any>,item:any) {
    
    this.pathArchivo=this.sanitizer.bypassSecurityTrustResourceUrl(api+"/admin/view/"+item.archive)
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			
		);
	}
  
}
