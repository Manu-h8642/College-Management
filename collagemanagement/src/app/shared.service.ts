import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://127.0.0.1:9000/"
  constructor(private http:HttpClient) { }
  get_col_data():Observable<any>{
    return this.http.get<any[]>(this.APIUrl+'col/')
  }
  new_col(val:any){
    return this.http.post(this.APIUrl+'/col/',val)
  }
  update_col(val:any){
    return this.http.put(this.APIUrl+'/col/',val)
  }
  deleate_col(val:any){
    return this.http.delete(this.APIUrl+'col/'+ val)
  }
  get_cou_data():Observable<any>{
    return this.http.get<any[]>(this.APIUrl+'cou/')
  }
  new_cou(val:any){
    return this.http.post(this.APIUrl+'/cou/',val)
  }
  update_cou(val:any){
    return this.http.put(this.APIUrl+'/cou/',val)
  }
  deleate_cou(val:any){
    return this.http.delete(this.APIUrl+'cou/'+ val)
  }
  get_std_data():Observable<any>{
    return this.http.get<any[]>(this.APIUrl+'std/')
  }
  new_std(val:any){
    return this.http.post(this.APIUrl+'/std/',val)
  }
  update_std(val:any){
    return this.http.put(this.APIUrl+'/std/',val)
  }
  deleate_std(val:any){
    return this.http.delete(this.APIUrl+'std/'+ val)
  }
  get_tea_data():Observable<any>{
    return this.http.get<any[]>(this.APIUrl+'tec/')
  }
  new_tea(val:any){
    return this.http.post(this.APIUrl+'/tec/',val)
  }
  update_tea(val:any){
    return this.http.put(this.APIUrl+'/tec/',val)
  }
  deleate_tea(val:any){
    return this.http.delete(this.APIUrl+'tec/'+ val)
  }
}
