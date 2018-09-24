import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TMinusComponent } from './t-minus.component';

describe('TMinusComponent', () => {
  let component: TMinusComponent;
  let fixture: ComponentFixture<TMinusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TMinusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TMinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
