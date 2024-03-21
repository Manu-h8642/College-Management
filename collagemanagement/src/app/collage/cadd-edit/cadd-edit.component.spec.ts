import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaddEditComponent } from './cadd-edit.component';

describe('CaddEditComponent', () => {
  let component: CaddEditComponent;
  let fixture: ComponentFixture<CaddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaddEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
