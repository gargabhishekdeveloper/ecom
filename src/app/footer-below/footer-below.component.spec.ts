import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBelowComponent } from './footer-below.component';

describe('FooterBelowComponent', () => {
  let component: FooterBelowComponent;
  let fixture: ComponentFixture<FooterBelowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBelowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
