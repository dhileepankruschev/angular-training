import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserserviceChild2Component } from './userservice-child2.component';

describe('UserserviceChild2Component', () => {
  let component: UserserviceChild2Component;
  let fixture: ComponentFixture<UserserviceChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserserviceChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserserviceChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
