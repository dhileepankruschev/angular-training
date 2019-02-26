import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventChkComponent } from './event-chk.component';

describe('EventChkComponent', () => {
  let component: EventChkComponent;
  let fixture: ComponentFixture<EventChkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventChkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventChkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
