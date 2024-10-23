import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadminuserComponent } from './viewadminuser.component';

describe('ViewadminuserComponent', () => {
  let component: ViewadminuserComponent;
  let fixture: ComponentFixture<ViewadminuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewadminuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewadminuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
