import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseddEditComponent } from './coursedd-edit.component';

describe('CourseddEditComponent', () => {
  let component: CourseddEditComponent;
  let fixture: ComponentFixture<CourseddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
