import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
      return this.http.get(BASE_URL+"/getAllStudents")
    }
  constructor(public http: HttpClient) { }
}
