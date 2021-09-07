import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  clientForm: FormGroup;
  title = 'Crear cliente';

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      name: ['Jan Pierre'],
      lastName: [''],
      email: ['']
    });
  }

  create(): void {
    console.log('clicked');
    console.log(this.clientForm);
  }

}
