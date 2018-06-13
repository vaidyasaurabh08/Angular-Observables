import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableUsageComponent } from './observable-usage.component';

describe('ObservableUsageComponent', () => {
  let component: ObservableUsageComponent;
  let fixture: ComponentFixture<ObservableUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
