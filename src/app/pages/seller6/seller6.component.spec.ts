import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seller6Component } from './seller6.component';

describe('Seller6Component', () => {
  let component: Seller6Component;
  let fixture: ComponentFixture<Seller6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seller6Component]
    });
    fixture = TestBed.createComponent(Seller6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
