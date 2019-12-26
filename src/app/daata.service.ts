import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DaataService {
  myUrl:string = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private myservice: HttpClient) { }
  getData(){
    return this.myservice.get(this.myUrl) ;
  }
}
