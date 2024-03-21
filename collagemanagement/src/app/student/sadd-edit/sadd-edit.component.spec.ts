import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaddEditComponent } from './sadd-edit.component';

describe('SaddEditComponent', () => {
  let component: SaddEditComponent;
  let fixture: ComponentFixture<SaddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
