import { Component, OnInit } from '@angular/core';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-get-all-students',
  templateUrl: './get-all-students.component.html',
  styleUrls: ['./get-all-students.component.css']
})
export class GetAllStudentsComponent implements OnInit {

  students: Student[] = [];

  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
    const promise = this.studentService.getStudents();
    promise.subscribe((response) => {
      console.log(response);
      this.students = response as Student[];
    })
  }
}
