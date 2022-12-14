import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { GetAllStudentsComponent } from './Components/get-all-students/get-all-students.component';
import { GetStudentComponent } from './Components/get-student/get-student.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';

const routes: Routes = [{path:"addStudent",component:AddStudentComponent}
,{path:"getAllStudents",component:GetAllStudentsComponent}
,{path:"getStudent",component:GetStudentComponent}
,{path:"updateStudent",component:UpdateStudentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
