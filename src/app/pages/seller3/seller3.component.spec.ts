import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seller3Component } from './seller3.component';

describe('Seller3Component', () => {
  let component: Seller3Component;
  let fixture: ComponentFixture<Seller3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seller3Component]
    });
    fixture = TestBed.createComponent(Seller3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
