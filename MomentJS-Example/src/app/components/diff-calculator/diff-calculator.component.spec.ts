import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffCalculatorComponent } from './diff-calculator.component';

describe('DiffCalculatorComponent', () => {
  let component: DiffCalculatorComponent;
  let fixture: ComponentFixture<DiffCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
