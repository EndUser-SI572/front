import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { Plants } from "../../../../domain/models/plants";
import { ToastrService } from "ngx-toastr";
import { PlantService } from "../../../../../services/PlantService";
import { UserService } from "../../../../../services/UserService";
import { User } from "../../../../domain/models/User";

@Component({
  selector: 'app-form-add-plant',
  templateUrl: './form-add-plant.component.html',
  styleUrls: ['./form-add-plant.component.scss']
})
export class FormAddPlantComponent implements OnChanges, OnInit {

  @Output() onCloseModel = new EventEmitter();
  @Output() plantAddedOrUpdated = new EventEmitter();
  @Input() data: Plants | null = null;
  plantForm!: FormGroup;

  user !: User | null
  constructor(private _plantService: PlantService,
              private _userService: UserService,
              public dialog: MatDialog,
              private fb: FormBuilder,
              private toastr: ToastrService) {

    this.plantForm = this.fb.group({
      name: ['', [Validators.required]],
      scientificName: ['', [Validators.required]],
      idealHumidity: ['', [Validators.required]],
      idealTemperature: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.user = this._userService.getUser();
  }

  onClose() {
    this.onCloseModel.emit();
  }

  ngOnChanges(): void {
    if (this.data) {
      this.plantForm.patchValue({
        name: this.data.name,
        scientificName: this.data.scientificName,
        idealHumidity: this.data.idealHumidity,
        idealTemperature: this.data.idealTemperature,
        imageUrl: this.data.imageUrl
      });
    }
  }

  onSubmit() {
    if (this.plantForm.valid) {
      const formData = {
        ...this.plantForm.value,
        userId: this.user?.id
      };

      if (this.data) {
        this._plantService.updatePlant(this.data.id, formData).subscribe({
          next: (response: any) => {
            this.resetPlantForm();
            this.toastr.success("Plant update success");
            this.plantAddedOrUpdated.emit();
          }
        });

      } else {
        this._plantService.addPlant(formData).subscribe({
          next: (response: any) => {
            this.resetPlantForm();
            this.toastr.success("Plant added success");
            this.plantAddedOrUpdated.emit();
          }
        });
      }

    } else {
      this.plantForm.markAllAsTouched();
    }
  }

  resetPlantForm() {
    this.plantForm.reset();
    this.onClose();
  }
}
