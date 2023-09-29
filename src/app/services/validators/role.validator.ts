import { AbstractControl, ValidationErrors } from '@angular/forms';
import { UserType } from 'src/enums/role';

export function userTypeValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string; // Cast the control value to a string
  if (value === UserType.TEACHER || value === UserType.STUDENT) {
    return null; // Validation passed
  } else {
    return { invalidUserType: true }; // Validation failed
  }
}
