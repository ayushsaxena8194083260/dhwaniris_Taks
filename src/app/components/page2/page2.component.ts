import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import axios from 'axios'
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  userList: any = []
  public pieChartLabels: string[] = ['Sale1', 'Sales2', 'Sale3'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType = 'pie';

  pieColors = [
    {
      'backgroundColor': [
        'rgba(63,81,181,0.75)',
        'rgba(0,150,136,0.75)',
        'rgba(255,152,0,0.75)'
      ],
      'borderColor': [
        '#fff',
        '#fff',
        '#fff',
      ],
      'pointBackgroundColor': [
        'rgba(63,81,181,1)',
        'rgba(0,150,136,1)',
        'rgba(255,152,0,1)'
      ],
      'pointBorderColor': [
        '#fff',
        '#fff',
        '#fff'
      ],
      'pointHoverBackgroundColor': [
        'rgba(63,81,181,1)',
        'rgba(0,150,136,1)',
        'rgba(1255,152,0,1)'
      ],
      'pointHoverBorderColor': [
        'rgba(63,81,181,1)',
        'rgba(0,150,136,1)',
        'rgba(255,152,0,1)'
      ]
    }
  ];
 

 
  ngOnInit() {
    
  }
  getDetails = () => {
    const instance = axios.create();
    instance.defaults.timeout = 30000;
    instance.post('http://proplifydev-env.eba-fxkxamgi.us-east-1.elasticbeanstalk.com/admin/user/get', {}, {
      headers: {
        'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYW5zaHVsam9oYXJpYWpAZ21haWwuY29tIiwiX2lkIjoiNWZlNDJkMGE5MGNiNTMyNzcxZThlOTNhIiwicm9sZSI6ImFkbWluIn0sImV4cCI6MTYxOTEwMDkwMjAxMCwiaWF0IjoxNjE5MTQwMDI0fQ.SiyhYK8TZsQyWfAEQJTpx0WZU18xXgS6bs_fWR4o0ws`
      }
    }).then((response) => {

    //  when we get response we can assign value to lables and data of chart like this and this will
    // allow data to display on screen

      this.pieChartLabels = ["task1" ,"task2" ,"task3"]
      
    })
  }
}

