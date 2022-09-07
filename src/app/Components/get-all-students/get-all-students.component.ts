import { Component, OnInit } from '@angular/core';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';
import {FormControl,FormGroup,Validators} from '@angular/forms'; 

@Component({
  selector: 'app-get-all-students',
  templateUrl: './get-all-students.component.html',
  styleUrls: ['./get-all-students.component.css']
})
export class GetAllStudentsComponent implements OnInit {

  students: Student[] = [];
  studentlist: Student[] = [];
  isupdated = false; 
  displayStyle = "none";

  student={
    id:0,
    firstName:'',
    lastName:'',
    subject:0,
    dob:new Date(),
    grade:0
  };

  constructor(public studentService:StudentService) { }
  
  ngOnInit(): void {
    const promise = this.studentService.getStudents();
    promise.subscribe((response) => {
      console.log(response);
      this.students = response as Student[];
    })
  }


  deleteRow(student: any, index: number) {
    const observable = this.studentService.deleteStudent(student);
    observable.subscribe((response) => {
      console.log(response);
      this.students.splice(index,1);
      window.location.reload();
    })
  }

  deleteAllRows() {
    const observable = this.studentService.deleteAllStudents();
    observable.subscribe((response) => {
      console.log(response);
      alert("All Students Deleted");
      window.location.reload();
    })
  }
  
}
