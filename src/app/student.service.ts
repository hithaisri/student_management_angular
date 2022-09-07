import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Student from './Entity/Student';

const BASE_URL = 'http://localhost:9090';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

    saveStudent(student: {
    firstName:string;
    lastName:string;
    subject:number;
    dob:Date;
    grade:number;
    }){
      return this.http.post(BASE_URL+"/saveStudent", student);
    }

    getStudents() {
      return this.http.get(BASE_URL+"/getAllStudents");
    }

    deleteStudent(student:any) {
      return this.http.delete(BASE_URL+"/deleteStudent/"+student.id);
    }

    searchById(id:number){
      return this.http.get(BASE_URL+"/getStudent/"+id);
    }

    searchByGrade(grade:number){
      return this.http.get(BASE_URL+"/getStudentByGrade/"+grade);
    }

    deleteAllStudents() {
      return this.http.delete(BASE_URL+"/deleteAllStudents",{responseType: 'text'});
    }

    updateStudent(id: number, student: Student) {
      return this.http.put(BASE_URL+"/updateStudent/"+id, student);
    }

  constructor(public http: HttpClient) { }
}
