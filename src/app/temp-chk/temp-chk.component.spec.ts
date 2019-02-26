import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempChkComponent } from './temp-chk.component';

describe('TempChkComponent', () => {
  let component: TempChkComponent;
  let fixture: ComponentFixture<TempChkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempChkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempChkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
