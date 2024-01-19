import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';11

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
  providers: [FormBuilder, Validators]
})
export class DynamicFormComponent {

  constructor(public formBuilderObject: FormBuilder) {}


  CustomerSupportForm = this.formBuilderObject.group ({
    firstName: ['', [Validators.required, Validators.pattern(/^[a-z A-Z]+$/)]],
    lastName: ['', [Validators.required, Validators.pattern(/^[a-z A-Z]+$/)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^\d{10}$/)]],
    city: ['', [Validators.required, Validators.minLength(4)]],
    state: ['', [Validators.required]],
    zipCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    comment: ['', [Validators.required, Validators.minLength(30)]],
})

  submitForm() {
    if(this.CustomerSupportForm.valid) {
      console.log('Form values:', this.CustomerSupportForm.value);
    }
  }
}
