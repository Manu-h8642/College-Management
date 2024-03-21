import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdisplayComponent } from './sdisplay.component';

describe('SdisplayComponent', () => {
  let component: SdisplayComponent;
  let fixture: ComponentFixture<SdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SdisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
