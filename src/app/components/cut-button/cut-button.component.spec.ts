import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutButtonComponent } from './cut-button.component';

describe('CutButtonComponent', () => {
  let component: CutButtonComponent;
  let fixture: ComponentFixture<CutButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
