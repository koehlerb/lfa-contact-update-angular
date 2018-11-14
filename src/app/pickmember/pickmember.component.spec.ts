import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickmemberComponent } from './pickmember.component';

describe('PickmemberComponent', () => {
  let component: PickmemberComponent;
  let fixture: ComponentFixture<PickmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
