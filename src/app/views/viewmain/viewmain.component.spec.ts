import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmainComponent } from './viewmain.component';

describe('ViewmainComponent', () => {
  let component: ViewmainComponent;
  let fixture: ComponentFixture<ViewmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewmainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
