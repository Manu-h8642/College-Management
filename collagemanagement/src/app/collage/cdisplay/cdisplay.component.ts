import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-cdisplay',
  templateUrl: './cdisplay.component.html',
  styleUrl: './cdisplay.component.css'
})
export class CdisplayComponent {
  constructor(private service:SharedService){}
clist:any=[]
col:any;
ModalTitle:any;
Activate_cAddedit:boolean=false;
ngOnInit():void{
 this.refresh_col_data()
}
refresh_col_data(){
  this.service.get_col_data().subscribe(data=>{
    this.clist=data
  })
}
cadd_click(){
  this.col={
    c_id:0,
    c_name:"",
    Location:"",
    Contact_No:"",
    email:""
  }
  this.ModalTitle="Add New College..."
  this.Activate_cAddedit=true;
}
close_click(){
  this.Activate_cAddedit=false;
  this.refresh_col_data()
}
edit_click(dataid:any){
  this.ModalTitle="Edit Details"
  this.Activate_cAddedit=true;
  this.col=dataid;
}
del_care(item:any){
  if(confirm("Are you sure..?")){
    this.service.deleate_col(item.c_id).subscribe(data=>{
      this.refresh_col_data()
    })
  }
}
}
