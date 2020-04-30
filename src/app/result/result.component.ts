import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router:Router){}
  
  res = '';
  ngOnInit() {
    let result = this.route.snapshot.paramMap.get('res');
    this.res = result;
  }

  back(){
     this.router.navigate(['../']);
  }
}