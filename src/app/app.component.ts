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

  public ngOnInit() {
    this.daysArr = this.createCalendar(this.date);
  }

  createCalendar(month) {
    const firstDay = moment(month).startOf('M');

    const days = Array(month.daysInMonth()).fill(null)
    .map((el, i) => i)
    .map( n => {
      return moment( firstDay ).add( n, 'd' );
    });

    // const days = Array.apply(null, { length: month.daysInMonth()})
    //   .map(Number.call, Number)

       for ( let n = 0; n < firstDay.weekday(); n++ ) {
         days.unshift(null);
       }

    return days;
  }


  todayCheck( day ) {
    if ( !day ) {
      return false;
    }
    return moment().format('L') === day.format('L');
  }

  nextMonth() {
    this.date.add(1, 'M');
    this.daysArr = this.createCalendar(this.date);
  }

  previousMonth() {
    this.date.subtract(1, 'M');
    this.daysArr = this.createCalendar(this.date);
  }



}
