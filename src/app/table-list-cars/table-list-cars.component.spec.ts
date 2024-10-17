import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListCarsComponent } from './table-list-cars.component';

describe('TableListCarsComponent', () => {
  let component: TableListCarsComponent;
  let fixture: ComponentFixture<TableListCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableListCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableListCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
