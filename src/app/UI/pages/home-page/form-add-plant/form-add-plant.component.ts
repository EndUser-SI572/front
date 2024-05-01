import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PlantsUseCases} from "../../../../domain/useCases/plantsUseCases";
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

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
export class FormAddPlantComponent {

  private fb =inject(FormBuilder);
  private router = inject(Router);
  plantForm !: FormGroup;

  constructor(private _plantUseCase: PlantsUseCases, public dialog: MatDialog) {
    this.plantForm = this.fb.group({
      name: ['', [Validators.required]],
      scientificName: ['', [Validators.required]],
      humidity: ['', [Validators.required]],
      temperature: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  create(){
    this._plantUseCase.createPlants(this.plantForm.value)
      .subscribe(()=>{
        this.resetPlantForm();
        window.location.reload();
      });
  }

  resetPlantForm() {
    this.plantForm.reset();
  }

}

// dialog component
@Component({
  selector: 'app-dialog-form-add-plant',
  templateUrl: 'dialog-form-add-plant.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogFormAddPlant {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(FormAddPlantComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
