import {Component, EventEmitter, inject, Input, OnChanges, Output} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PlantsUseCases} from "../../../../domain/useCases/plantsUseCases";
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {Plants} from "../../../../domain/models/plants";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-form-add-plant',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './form-add-plant.component.html',
  styleUrl: './form-add-plant.component.scss'
})
export class FormAddPlantComponent implements OnChanges{

  @Output() onCloseModel = new EventEmitter();
  @Input() data: Plants | null = null;
  plantForm !: FormGroup;

  constructor(private _plantUseCase: PlantsUseCases,
              public dialog: MatDialog,
              private fb:FormBuilder,
              private  toastr: ToastrService) {
    this.plantForm = this.fb.group({
      name: ['', [Validators.required]],
      scientificName: ['', [Validators.required]],
      humidity: ['', [Validators.required]],
      temperature: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  onClose(){
    this.onCloseModel.emit(false);
  }

  ngOnChanges(): void {
    if (this.data) {
      this.plantForm.patchValue({
        name: this.data.name,
        scientificName: this.data.scientificName,
        humidity: this.data.humidity,
        temperature: this.data.temperature,
        image: this.data.image
      });
    }
  }


  onSubmit() {
    if (this.plantForm.valid) {
      if (this.data) {
        this._plantUseCase
          .updatePlant(this.data.id as string, this.plantForm.value)
          .subscribe({
            next: (response: any) => {
              this.resetPlantForm();
              this.toastr.success("Plant update success");
              this.toastr.clear();
            },
          });
      } else {
        this._plantUseCase.createPlants(this.plantForm.value).subscribe({
          next: (response: any) => {
            this.resetPlantForm();
            this.toastr.success("Plant added success");
          },
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

