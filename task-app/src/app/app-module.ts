import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TasksComponent } from './components/tasks-component/tasks-component';
import { TaskListComponent } from './components/task-list-component/task-list-component';
import { TaskItemComponent } from './components/task-item-component/task-item-component';


@NgModule({
  declarations: [
    App,
    TasksComponent,
    TaskListComponent, 
    TaskItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
