import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseHttpCompComponent } from './use-http-comp.component';

describe('UseHttpCompComponent', () => {
  let component: UseHttpCompComponent;
  let fixture: ComponentFixture<UseHttpCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseHttpCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseHttpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
