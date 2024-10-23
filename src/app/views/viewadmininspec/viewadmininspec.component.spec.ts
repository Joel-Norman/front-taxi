import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewadmininspecComponent } from './viewadmininspec.component';

describe('ViewadmininspecComponent', () => {
  let component: ViewadmininspecComponent;
  let fixture: ComponentFixture<ViewadmininspecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewadmininspecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewadmininspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
