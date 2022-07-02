import { Injectable } from '@angular/core';
import { Student } from './student';
@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  studentID: number;
  students: Student[] = [];
  constructor() {
    this.studentID = -1; // indicates edit is off
    this.students[0] = { name: 'Rohit', class_rank: 12, gender: 'Male', id: 0 };
    this.students[1] = {
      name: 'Anthony',
      class_rank: 10,
      gender: 'Male',
      id: 1,
    };
    this.students[2] = { name: 'Pem', class_rank: 1, gender: 'Male', id: 2 };
    this.students[3] = {
      name: 'Laura',
      class_rank: 2,
      gender: 'Female',
      id: 3,
    };
    this.students[4] = {
      name: 'Sophia',
      class_rank: 9,
      gender: 'Female',
      id: 4,
    };
  }

  getStudents() {
    return this.students;
  }

  getID() {
    return this.studentID;
  }

  setID(id: number) {
    this.studentID = id;
  }
  addStudent(student: any) {
    let temp: Student = { name: '', class_rank: 0, gender: '', id: 0 };
    temp.class_rank = student.class_rank;
    temp.name = student.name;
    temp.gender = student.gender;
    temp.id = this.students.length;
    this.students.push(temp);
  }

  editStudent(student: any) {
    let temp: Student = { name: '', class_rank: 0, gender: '', id: 0};
    temp.class_rank = student.class_rank;
    temp.name = student.name;
    temp.gender = student.gender;
    temp.id = this.studentID;
    this.students[this.studentID] = temp;
  }
}
