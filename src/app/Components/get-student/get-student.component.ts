import { Component, OnInit } from '@angular/core';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.css']
})
export class GetStudentComponent implements OnInit {

  studentList: Student[]= [];

  student={
    id:0,
    firstName:'',
    lastName:'',
    subject:0,
    dob:new Date(),
    grade:0
  };

  searchById(sid:number){
   this.studentService.searchById(sid).subscribe((response)=>{
      console.log(response);
      this.studentList.splice(0);
      this.student=response as Student;
      this.studentList.push(this.student);
    })
  }

  searchByGrade(grade:number){
    const promise = this.studentService.searchByGrade(grade);
    promise.subscribe((response)=>{
      this.studentList.splice(0);
      console.log(response);
      this.studentList=response as Student[];
    })
  }

  constructor(public studentService:StudentService) { }

  ngOnInit(): void {
  }

}
