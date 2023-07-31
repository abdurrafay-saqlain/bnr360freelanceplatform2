import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seller1Component } from './seller1.component';

describe('Seller1Component', () => {
  let component: Seller1Component;
  let fixture: ComponentFixture<Seller1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seller1Component]
    });
    fixture = TestBed.createComponent(Seller1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
