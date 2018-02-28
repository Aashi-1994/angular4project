import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

  url = environment.url+'/api/v1/employees';	

  constructor(private _http: HttpClient) { }


  getUserList(){
  	return this._http.get(this.url).map((res)=>{
  		return res;
  	})
  }

}
