import { Component, OnInit } from '@angular/core';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  title = "Fill all the fields below "

student: Student = new Student();

users: Student[] = [];

  save() {
    const observable = this.studentService.saveStudent(this.student);
    observable.subscribe(
      (response: any) => {
       console.log(response);
       alert("Successfully added Student!");
       window.location.reload();
      },
      function(error) {
        console.log(error);
        alert("Something went wrong please try again!");
      }
    )
  }

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
  }

}
