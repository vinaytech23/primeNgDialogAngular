import { Component, OnInit } from '@angular/core';
import { DaataService } from './daata.service';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  recdData;
  objData: any;
  jsonData: any;
  str1: any;
  display: boolean = false;
 constructor(private myser: DaataService){}
  ngOnInit() {
    this.bringData();
    interval(1000).subscribe(x => {
      this.bringData();
  })
    ;
  }
  bringData(){
  this.myser.getData().subscribe(res=>
    this.recdData=res);
  }
    showDialog(itemR: any) {
      this.objData = itemR;
      console.log(this.objData);
        this.display = true;
    }
  }
