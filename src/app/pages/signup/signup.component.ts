import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Gender } from 'src/enums/gender';
import { Role } from 'src/enums/role';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  signupForm: FormGroup;
  roles = Object.values(Role);
  genders = Object.values(Gender);
  loading: boolean = false;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private readonly userService: UserService
    ) {
    this.signupForm = this.fb.group({
      names: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern(/^\+250\d{9}$/)]],
      role: [Role.TEACHER],
      gender: [Gender.MALE],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$/)]],
    })
  }

  handleSubmit() {
    try {
      this.loading = true;
      console.log(this.signupForm.value);
      if (this.signupForm.invalid) return this.signupForm.markAllAsTouched();
      this.userService.create(this.signupForm.value)
    } catch (error) {

    } finally {
      this.loading = false;
    }
  }

}
