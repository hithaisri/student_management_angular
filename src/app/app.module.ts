import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { GetAllStudentsComponent } from './Components/get-all-students/get-all-students.component';
import { GetStudentComponent } from './Components/get-student/get-student.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddStudentComponent,
    GetAllStudentsComponent,
    GetStudentComponent,
    UpdateStudentComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
