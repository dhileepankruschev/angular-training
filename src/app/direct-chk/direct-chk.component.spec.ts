import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectChkComponent } from './direct-chk.component';

describe('DirectChkComponent', () => {
  let component: DirectChkComponent;
  let fixture: ComponentFixture<DirectChkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectChkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectChkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
