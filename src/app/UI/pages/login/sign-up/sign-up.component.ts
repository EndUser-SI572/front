import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {User} from "../../../../domain/models/User";
import {UserService} from "../../../../../services/UserService";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder,
              private _userService:UserService)

  {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required],
      cellPhone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const user: User = this.signUpForm.value;

      this._userService.register(user)

    } else {
      alert('Invalid Form')
    }
  }
}
