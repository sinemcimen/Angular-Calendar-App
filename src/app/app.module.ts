import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScheduleModule, RecurrenceEditorModule, DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService,AgendaService, DragAndDropService, ResizeService } from '@syncfusion/ej2-angular-schedule';
import { AccordionModule, ToolbarModule, ContextMenuModule, TabModule, TreeViewModule, SidebarModule, MenuModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScheduleModule, RecurrenceEditorModule, AccordionModule, ToolbarModule, ContextMenuModule, TabModule, TreeViewModule, SidebarModule, MenuModule
  ],
  providers: [DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService,AgendaService, DragAndDropService, ResizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
