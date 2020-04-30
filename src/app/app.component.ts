import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  a = 0;
  b = 0;
  op;
  text = '';

  input(data){
    if(data.isInteger()){
      if(this.a != 0){
        this.b = data;
        this.text += data;
      }
      else {
        this.a = data;
        this.text += data;
      }
    }else{
      this.op = data;
      this.text += data;
    }
  }
}