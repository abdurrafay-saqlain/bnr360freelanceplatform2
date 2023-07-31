import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seller5Component } from './seller5.component';

describe('Seller5Component', () => {
  let component: Seller5Component;
  let fixture: ComponentFixture<Seller5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seller5Component]
    });
    fixture = TestBed.createComponent(Seller5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
