import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seller4Component } from './seller4.component';

describe('Seller4Component', () => {
  let component: Seller4Component;
  let fixture: ComponentFixture<Seller4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Seller4Component]
    });
    fixture = TestBed.createComponent(Seller4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
