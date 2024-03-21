import { Component,Input } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-cadd-edit',
  templateUrl: './cadd-edit.component.html',
  styleUrl: './cadd-edit.component.css'
})
export class CaddEditComponent {
  constructor(private service:SharedService){}
  @Input() col:any;
  c_id:any;
  a:any;
  b:any;
  c:any;
  d:any;
  ngOnInit():void{
    this.c_id = this.col.c_id;
    this.a = this.col.c_name;
    this.b = this.col.Location;
    this.c = this.col.Contact_No;
    this.d = this.col.email;
  }
  new_col(){
    var val = {
      c_id:0,
      c_name:this.a,
      Location:this.b,
      Contact_No:this.c,
      email:this.d
    }
    this.service.new_col(val).subscribe(res=>{
      alert(res.toString())
    })
  }
  updatecol(){
    var val = {
      c_id:this.col.c_id,
      c_name:this.a,
      Location:this.b,
      Contact_No:this.c,
      email:this.d,
    }
    this.service.update_col(val).subscribe(res=>{
      alert(res.toString())
    })
  }
}
