import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';



@Injectable()
export class DataService {

  constructor(private _http:Http) { 

  	
  }
getService(){

return this._http.get('http://dummy.restapiexample.com/api/v1/employees').map(res=>{
  		return res.json();
  	})
  }
}
