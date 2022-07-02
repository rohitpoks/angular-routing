import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../form-service.service';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private service: StudentsService, private form: FormServiceService) {}

  ngOnInit(): void {}

  resetID() {
    this.form.form.markAsUntouched;
    this.service.setID(-1);
    this.form.form.patchValue({
      name: "", gender: "", class_rank: ""
    })
  }
}
