import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
  providers: [DataService]
})
export class UserdetailsComponent implements OnInit {

  userList:any = [];

  constructor(private _dataService: DataService) {
  	this._dataService.getUserList().subscribe(res =>{
  		this.userList = res;

  		for(let i=0 ; i<this.userList.length ; i++){
  			let data = this.userList[i];
  			if(data.employee_name == " " || data.employee_name == null || data.employee_name == undefined){
  				alert("ddd")
  				this.userList.splice(data,1)
  			}
  		}
  	})
  }

  ngOnInit() { }

}
