import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormServiceService } from '../form-service.service';
import { StudentsService } from '../students.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: StudentsService, private formService : FormServiceService) { }
  registrationForm = this.formService.form;

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.service.addStudent(form);
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get id() {
    return this.registrationForm.get('id');
  }

  get gender() {
    return this.registrationForm.get('gender');
  }

  get class_rank() {
    return this.registrationForm.get('class_rank');
  }
  
  onEdit(form: any) {
    this.service.editStudent(form);
  }

  get editStatus() {
    if (this.service.getID() == -1) return false;
    return true;
  }

}
