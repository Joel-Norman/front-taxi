import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewloginComponent } from './viewlogin.component';

describe('ViewloginComponent', () => {
  let component: ViewloginComponent;
  let fixture: ComponentFixture<ViewloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
