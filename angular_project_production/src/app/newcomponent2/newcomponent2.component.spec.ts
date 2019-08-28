import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newcomponent2Component } from './newcomponent2.component';

describe('Newcomponent2Component', () => {
  let component: Newcomponent2Component;
  let fixture: ComponentFixture<Newcomponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newcomponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newcomponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
