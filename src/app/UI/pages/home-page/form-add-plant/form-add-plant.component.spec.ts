import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddPlantComponent } from './form-add-plant.component';

describe('FormAddPlantComponent', () => {
  let component: FormAddPlantComponent;
  let fixture: ComponentFixture<FormAddPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddPlantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAddPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
