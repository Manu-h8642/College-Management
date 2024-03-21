import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaddEditComponent } from './tadd-edit.component';

describe('TaddEditComponent', () => {
  let component: TaddEditComponent;
  let fixture: ComponentFixture<TaddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
