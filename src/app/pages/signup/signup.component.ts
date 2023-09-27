import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserType } from 'src/enums/role';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  signupForm: FormGroup;
  roles = Object.values(UserType);
  
  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      names: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      role: [UserType.TEACHER],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]],
    })
  }

}
