import { Component, ViewChild,ViewEncapsulation } from '@angular/core';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { ReplaySubject, from } from 'rxjs';
import { Title } from '@angular/platform-browser';
import {DragAndDropEventArgs} from '@syncfusion/ej2-angular-navigations';

@Component({
  
  selector: 'app-root',
  template:`
    <div class="margin-cont"> 
      <div class="left">
        <ejs-schedule width='1250' height='880px' [selectedDate]="selectedDate"  [firstDayOfWeek]='startWeek' [views]="setViews" [currentView]="setView" [eventSettings]="eventObject" locale = 'en'>

        </ejs-schedule>
      </div>
    </div>
     `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
  title="App";
  public setView: View = 'Month';
  public dateValue: Date = new Date();
  public startWeek: number = 1;
  public selectedDate: Date = new Date(2020,8,1);
  public setViews:View[]=["Day","Week","Month","Agenda"];
  public eventObject: EventSettingsModel={
    dataSource:[{
      EventTitle:"",
      EventStart: new Date(2020,7,31,16),
      EventEnd: new Date(2020,7,31,17)
    }],
    fields:{
      subject: {name: 'EventTitle', default:"hello"},
      startTime:{name: 'EventStart'},
      endTime:{name: 'EventEnd'}
    }
  }
  
}


