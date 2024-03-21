import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-sdisplay',
  templateUrl: './sdisplay.component.html',
  styleUrl: './sdisplay.component.css'
})
export class SdisplayComponent {
  constructor(private service:SharedService){}
  clist:any=[]
  std:any;
  ModalTitle:any;
  Activate_cAddedit:boolean=false;
  ngOnInit():void{
   this.refresh_std_data()
  }
  refresh_std_data(){
    this.service.get_std_data().subscribe(data=>{
      this.clist=data
    })
  }
  cadd_click(){
    this.std={
      s_id:0,
      name:"",
      age:"",
      mobile:"",
      email:"",
      location:"",
      f_name:"",
      contactno:"",
    }
    this.ModalTitle="Add New Student..."
    this.Activate_cAddedit=true;
  }
  close_click(){
    this.Activate_cAddedit=false;
    this.refresh_std_data()
  }
  edit_click(dataid:any){
    this.ModalTitle="Edit Details"
    this.Activate_cAddedit=true;
    this.std=dataid;
  }
  del_care(item:any){
    if(confirm("Are you sure..?")){
      this.service.deleate_std(item.t_id).subscribe(data=>{
        this.refresh_std_data()
      })
    }
  }
}
