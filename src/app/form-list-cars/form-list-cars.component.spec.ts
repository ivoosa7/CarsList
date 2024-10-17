import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListCarsComponent } from './form-list-cars.component';

describe('FormListCarsComponent', () => {
  let component: FormListCarsComponent;
  let fixture: ComponentFixture<FormListCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormListCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormListCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
