import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditPlantComponent } from './form-edit-plant.component';

describe('FormEditPlantComponent', () => {
  let component: FormEditPlantComponent;
  let fixture: ComponentFixture<FormEditPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEditPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEditPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
