import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seller2Component } from './seller2.component';

describe('Seller2Component', () => {
  let component: Seller2Component;
  let fixture: ComponentFixture<Seller2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seller2Component]
    });
    fixture = TestBed.createComponent(Seller2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
