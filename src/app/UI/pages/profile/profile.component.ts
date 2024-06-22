import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from "../../../domain/models/User";
import {UserService} from "../../../../services/UserService";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userForm!: FormGroup;
  user: User | null = new User();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();

    this.userForm = this.formBuilder.group({
      name: [this.user?.name, Validators.required],
      lastName: [this.user?.lastName, Validators.required],
      username: [this.user?.username, Validators.required],
      age: [this.user?.age, Validators.required],
      gender: [this.user?.gender, Validators.required],
      cellPhone: [this.user?.cellPhone, Validators.required],
      numberPlants: [{ value: this.user?.numberPlants !== null ? this.user?.numberPlants : 0, disabled: true }]
    });
  }

  saveChanges(): void {
    if (this.userForm.valid && this.user) {
      const updatedUser: User = {
        ...this.user,
        name: this.userForm.value.name,
        lastName: this.userForm.value.lastName,
        username: this.userForm.value.username,
        age: this.userForm.value.age,
        gender: this.userForm.value.gender,
        cellPhone: this.userForm.value.cellPhone,
      };

      this.userService.update(updatedUser.id, updatedUser).subscribe({
        next: (val: any) => {
          alert("Updated");
          this.userService.saveUser(val)
          this.user = this.userService.getUser()
        }
      });
    }
  }
}
