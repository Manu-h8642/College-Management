import { Component,Input } from '@angular/core';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-tadd-edit',
  templateUrl: './tadd-edit.component.html',
  styleUrl: './tadd-edit.component.css'
})
export class TaddEditComponent {
  constructor(private service:SharedService){}
  @Input() tea:any;
  t_id:any;
  a:any;
  b:any;
  c:any;
  d:any;
  ngOnInit():void{
    this.t_id = this.tea.t_id;
    this.a = this.tea.name;
    this.b = this.tea.mobile;
    this.c = this.tea.email;
    this.d = this.tea.location;
  }
  new_tea(){
    var val = {
      t_id:0,
      name:this.a,
      mobile:this.b,
      email:this.c,
      location:this.d,
    }
    this.service.new_tea(val).subscribe(res=>{
      alert(res.toString())
    })
  }
  updatetea(){
    var val = {
      t_id:this.tea.t_id,
      name:this.a,
      mobile:this.b,
      email:this.c,
      location:this.d,
    }
    this.service.update_tea(val).subscribe(res=>{
      alert(res.toString())
    })
  }
}
