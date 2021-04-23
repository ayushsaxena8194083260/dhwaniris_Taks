import { Component, OnInit, ViewChild } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component  {
userList: any[] = [];
ngOnInit(){
this.getDetails()
}

getDetails = () => {
  const instance = axios.create();
  instance.defaults.timeout = 30000;
  instance.post('http://proplifydev-env.eba-fxkxamgi.us-east-1.elasticbeanstalk.com/admin/user/get', {}, {
    headers: {
      'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYW5zaHVsam9oYXJpYWpAZ21haWwuY29tIiwiX2lkIjoiNWZlNDJkMGE5MGNiNTMyNzcxZThlOTNhIiwicm9sZSI6ImFkbWluIn0sImV4cCI6MTYxOTEwMDkwMjAxMCwiaWF0IjoxNjE5MTQwMDI0fQ.SiyhYK8TZsQyWfAEQJTpx0WZU18xXgS6bs_fWR4o0ws` 
    }
  }).then((response) => {
    this.userList = response.data.data.response;
  })
}
}