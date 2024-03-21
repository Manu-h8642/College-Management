import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedispComponent } from './coursedisp.component';

describe('CoursedispComponent', () => {
  let component: CoursedispComponent;
  let fixture: ComponentFixture<CoursedispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursedispComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursedispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
