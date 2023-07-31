import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seller7Component } from './seller7.component';

describe('Seller7Component', () => {
  let component: Seller7Component;
  let fixture: ComponentFixture<Seller7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seller7Component]
    });
    fixture = TestBed.createComponent(Seller7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
