import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSuccesfullComponent } from './message-succesfull.component';

describe('MessageSuccesfullComponent', () => {
  let component: MessageSuccesfullComponent;
  let fixture: ComponentFixture<MessageSuccesfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageSuccesfullComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageSuccesfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
