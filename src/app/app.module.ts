import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoAppComponent } from '../app/todo-app/todo-app.component';
import { TodoFormComponent } from '../app/todo-form/todo-form.component';
import { TodoListComponent } from '../app/todo-list/todo-list.component';
import { TodoFooterComponent } from '../app/todo-footer/todo-footer.component';
import { TodoService } from '../app/todo.service';
import { StatsComponent } from '../app/stats/stats.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoFooterComponent,
    StatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
