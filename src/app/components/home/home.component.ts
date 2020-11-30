import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any = [];

  constructor( private http: HttpClient) { 
    console.log('Const home done');
    this.http.get('https://api.github.com/users')
    .subscribe( (data:any) => {
      this.users = data
      console.log(data)
    });
  }

  ngOnInit(): void {
  }

}
