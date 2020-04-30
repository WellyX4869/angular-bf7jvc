import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router){}

  ngOnInit() {
  }
  a = 0;
  b = 0;
  op = '';
  text = '';

  input(data){
    if(data < 10 && data > 0){
      if(this.op != ''){
        if(this.b > 0)
          this.b = this.b*10 + data;
        else this.b = data;
        this.text += data;
      }
      else {
        if(this.a > 0)
          this.a = this.a*10 + data;
        else this.a = data;
        this.text += data;
      }
    }else{
      this.op = data;
      this.text += data;
    }
  }

  result(){
    var res = 0;
    if(this.op == '+'){
      res = this.a + this.b;
    }
    if(this.op == '-'){
      res = this.a - this.b;
    }
    if(this.op == '*'){
      res = this.a * this.b;
    }

    this.a = 0;
    this.b = 0;
    this.text = '';
    this.op = '';
    this.router.navigate(['/result',res]);
  }
}