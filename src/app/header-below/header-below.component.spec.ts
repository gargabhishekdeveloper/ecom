import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBelowComponent } from './header-below.component';

describe('HeaderBelowComponent', () => {
  let component: HeaderBelowComponent;
  let fixture: ComponentFixture<HeaderBelowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBelowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
