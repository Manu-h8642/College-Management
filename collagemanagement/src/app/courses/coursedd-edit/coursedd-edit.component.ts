import { Component,Input } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-coursedd-edit',
  templateUrl: './coursedd-edit.component.html',
  styleUrl: './coursedd-edit.component.css'
})
export class CourseddEditComponent {
  constructor(private service:SharedService){}
  @Input() cou:any;
  co_id:any;
  a:any;
  b:any;
  c:any;
  d:any;
  e:any;
  ngOnInit():void{
    this.co_id = this.cou.co_id;
    this.a = this.cou.CourseName;
    this.b = this.cou.Duration;
    this.c = this.cou.Fees;
    this.d = this.cou.HODname;
    this.e = this.cou.HOD_mo;
  }
  new_cou(){
    var val = {
      co_id:0,
      CourseName:this.a,
      Duration:this.b,
      Fees:this.c,
      HODname:this.d,
      HOD_mo:this.e
    }
    this.service.new_cou(val).subscribe(res=>{
      alert(res.toString())
    })
  }
  updatecou(){
    var val = {
      co_id:this.cou.c_id,
      CourseName:this.a,
      Duration:this.b,
      Fees:this.c,
      HODname:this.d,
      HOD_mo:this.e,
    }
    this.service.update_cou(val).subscribe(res=>{
      alert(res.toString())
    })
  }
}
