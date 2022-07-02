import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../form-service.service';
import { Student } from '../student';
import { StudentsService } from '../students.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  students: Student[];

  constructor(private service: StudentsService, private form: FormServiceService) {
    this.students = service.getStudents();
  }

  ngOnInit(): void {}

  setID(id: number) {
    this.service.setID(id);
    this.form.form.patchValue(
      {
        name: this.students[id].name,
        gender: this.students[id].gender,
        class_rank: this.students[id].class_rank.toString(),
      }
    )
  }
}
