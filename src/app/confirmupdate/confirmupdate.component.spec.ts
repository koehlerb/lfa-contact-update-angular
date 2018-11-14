import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmupdateComponent } from './confirmupdate.component';

describe('ConfirmupdateComponent', () => {
  let component: ConfirmupdateComponent;
  let fixture: ComponentFixture<ConfirmupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
