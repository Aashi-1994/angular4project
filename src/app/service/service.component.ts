import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
	username;
	password;

constructor(private _routes:Router) { }

  ngOnInit() {
  }
loginUser(username,password){
	//e.preventDefault();
	//var password = e.target.elements[1].value;
	console.log(username,password);
	if(username == 'admin' && password == 'admin'){
		this._routes.navigate(['contact'])
	}
}
}
