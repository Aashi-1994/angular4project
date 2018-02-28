import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	name:string;
	age:number;
	address:address;
	hobbies:string[];
  dataget:any=[];
  constructor(private _dataService:DataService) {
    console.log("this is service");
    this._dataService.getService().subscribe(res=>{

      this.dataget = res;
      console.log(this.dataget)
    })
  }


  ngOnInit() {
  	console.log("this is working");
  	this.name = "aashi Singh";
  	this.age = 67;
  	this.address={
  		street:'123 gali yuo',
  		city: 'jabalpur',
  		state: 'MP'
  	};
  	this.hobbies = ['write','read','play'];
  }
  onClick(){
  this.name = "Love";
  this.hobbies.push("Games");
}
addHobby(hobby){
  this.hobbies.unshift(hobby);
  return false;
}
deleteHobby(hobby){
  this.hobbies.splice(hobby,1);
//   for(let i=0; i< this.hobbies.length; i++){
//     if(this.hobbies[i]==hobby){
//       this.hobbies.splice(i,1);
//     }

//   }
// }

}
}

interface address{
    street:string,
    city:string,
    state:string
  };
