import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentsService } from './students.service';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  private edit: boolean;
  constructor(private fb: FormBuilder, private service: StudentsService) {
    this.edit  = false;
  }
  registrationForm = this.fb.group({
    name: ['', Validators.required],
    gender: ['', Validators.required],
    class_rank: ['', Validators.required],
  });

  get form() {
    return this.registrationForm;
  }

  set_edit() {
    this.edit = true;
  }

  reset_edit() {
    this.edit = false;
  }

  get_edit() {
    return this.edit;
  }
}

