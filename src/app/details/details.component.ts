import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  students: Student[];
  params: any;
  showID: number;
  constructor(private service: StudentsService, private activated: ActivatedRoute) { 
    this.students = service.getStudents();
    this.activated.paramMap
    .subscribe(
      (params) => {
        this.params = params;
      }
    )
    this.showID = this.params.params.id;
  }

  ngOnInit(): void {
  }

}
