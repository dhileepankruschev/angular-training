import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserserviceChild1Component } from './userservice-child1.component';

describe('UserserviceChild1Component', () => {
  let component: UserserviceChild1Component;
  let fixture: ComponentFixture<UserserviceChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserserviceChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserserviceChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
