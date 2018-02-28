import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Welcome to Angular';

  months= ['Jan','feb','march','april','may','june','july'];
  visible = true;
  addChange(){
  	this.visible = ! this.visible;
  }
}