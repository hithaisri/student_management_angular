import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import Student from 'src/app/Entity/Student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  students: Student[] = [];
  student: Student = new Student();
  id: number = 0;

  deleteAllRows() {
    const observable = this.studentService.deleteAllStudents();
    observable.subscribe((response) => {
      console.log(response);
      alert("All Students Deleted");
      window.location.reload();
    })
  }

  updateStudent(st, j) {

    this.id = st.id;
    console.log(st.id);
    this.student.id = st.id;
    this.student.firstName = st.firstName;
    this.student.dob = st.dob;
    this.student.grade = st.grade;
    this.student.lastName = st.lastName;
    this.student.subject = st.subject;

  }

  update(student) {

    console.log(student);
    const observable = this.studentService.updateStudent(this.id, this.student);
    observable.subscribe(
      (response: any) => {
        console.log(response)
        alert("Student Updated");
      },
      function (error) {
        console.log(error);
        alert("Something went wrong");
      });
    window.location.reload()
  }
  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
    const promise = this.studentService.getStudents();
    promise.subscribe((response)=>{
      console.log(response);
      this.students=response as Student[]; 
    })
  }

}
