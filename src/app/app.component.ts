import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public date = moment();

  public daysArr;


  createCalendar(month) {
    // const firstDay = moment(month).startOf('M');
     const days = Array.apply(null, {length: month.daysInMonth() + 1})
       .map(Number.call, Number)
       .slice(1);

      return days;

  }


  public ngOnInit() {

    this.daysArr = this.createCalendar(this.date);
  }




}
