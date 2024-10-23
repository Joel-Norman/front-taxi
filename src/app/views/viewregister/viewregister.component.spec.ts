import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewregisterComponent } from './viewregister.component';

describe('ViewregisterComponent', () => {
  let component: ViewregisterComponent;
  let fixture: ComponentFixture<ViewregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewregisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
