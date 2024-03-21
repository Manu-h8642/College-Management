import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-coursedisp',
  templateUrl: './coursedisp.component.html',
  styleUrl: './coursedisp.component.css'
})
export class CoursedispComponent {
  constructor(private service:SharedService){}
  clist:any=[]
  cou:any;
  ModalTitle:any;
  Activate_cAddedit:boolean=false;
  ngOnInit():void{
   this.refresh_cou_data()
  }
  refresh_cou_data(){
    this.service.get_cou_data().subscribe(data=>{
      this.clist=data
    })
  }
  cadd_click(){
    this.cou={
      co_id:0,
      CourseName:"",
      Duration:"",
      Fees:"",
      HODname:"",
      HOD_mo:""
    }
    this.ModalTitle="Add New Course..."
    this.Activate_cAddedit=true;
  }
  close_click(){
    this.Activate_cAddedit=false;
    this.refresh_cou_data()
  }
  edit_click(dataid:any){
    this.ModalTitle="Edit Details"
    this.Activate_cAddedit=true;
    this.cou=dataid;
  }
  del_care(item:any){
    if(confirm("Are you sure..?")){
      this.service.deleate_cou(item.co_id).subscribe(data=>{
        this.refresh_cou_data()
      })
    }
  }
}
