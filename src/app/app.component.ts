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
    const firstDay = moment(month).startOf('M');
    const days = Array.apply(null, { length: month.daysInMonth()})
      .map(Number.call, Number)
      .map( n => {
        return moment( firstDay ).add( n, 'd' );
      });

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


  public ngOnInit() {
    this.daysArr = this.createCalendar(this.date);
  }
}
