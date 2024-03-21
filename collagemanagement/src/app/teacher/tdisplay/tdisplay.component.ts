import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-tdisplay',
  templateUrl: './tdisplay.component.html',
  styleUrl: './tdisplay.component.css'
})
export class TdisplayComponent {
  constructor(private service:SharedService){}
  clist:any=[]
  tea:any;
  ModalTitle:any;
  Activate_cAddedit:boolean=false;
  ngOnInit():void{
   this.refresh_tea_data()
  }
  refresh_tea_data(){
    this.service.get_tea_data().subscribe(data=>{
      this.clist=data
    })
  }
  cadd_click(){
    this.tea={
      t_id:0,
      name:"",
      mobile:"",
      email:"",
      location:"",
    }
    this.ModalTitle="Add New Teacher..."
    this.Activate_cAddedit=true;
  }
  close_click(){
    this.Activate_cAddedit=false;
    this.refresh_tea_data()
  }
  edit_click(dataid:any){
    this.ModalTitle="Edit Details"
    this.Activate_cAddedit=true;
    this.tea=dataid;
  }
  del_care(item:any){
    if(confirm("Are you sure..?")){
      this.service.deleate_tea(item.t_id).subscribe(data=>{
        this.refresh_tea_data()
      })
    }
  }
}
