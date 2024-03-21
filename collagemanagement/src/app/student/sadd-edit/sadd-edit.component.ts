import { Component,Input } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-sadd-edit',
  templateUrl: './sadd-edit.component.html',
  styleUrl: './sadd-edit.component.css'
})
export class SaddEditComponent {
  constructor(private service:SharedService){}
  @Input() std:any;
  s_id:any;
  a:any;
  b:any;
  c:any;
  d:any;
  e:any;
  f:any;
  g:any;
  ngOnInit():void{
    this.s_id = this.std.s_id;
    this.a = this.std.name;
    this.b = this.std.age;
    this.c = this.std.mobile;
    this.d = this.std.email;
    this.e = this.std.location;
    this.f = this.std.f_name;
    this.g = this.std.contactno;
  }
  new_std(){
    var val = {
      s_id:0,
      name:this.a,
      age:this.b,
      mobile:this.c,
      email:this.d,
      location:this.e,
      f_name:this.f,
      contactno:this.g,
    }
    this.service.new_std(val).subscribe(res=>{
      alert(res.toString())
    })
  }
  updatestd(){
    var val = {
      s_id:this.std.s_id,
      name:this.a,
      age:this.b,
      mobile:this.c,
      email:this.d,
      location:this.e,
      f_name:this.f,
      contactno:this.g,
    }
    this.service.update_std(val).subscribe(res=>{
      alert(res.toString())
    })
  }
}
