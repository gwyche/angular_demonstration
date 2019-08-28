import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFBComponent } from './profile-fb.component';

describe('ProfileFBComponent', () => {
  let component: ProfileFBComponent;
  let fixture: ComponentFixture<ProfileFBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
