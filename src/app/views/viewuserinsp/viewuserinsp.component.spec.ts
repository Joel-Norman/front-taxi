import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserinspComponent } from './viewuserinsp.component';

describe('ViewuserinspComponent', () => {
  let component: ViewuserinspComponent;
  let fixture: ComponentFixture<ViewuserinspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewuserinspComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewuserinspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
