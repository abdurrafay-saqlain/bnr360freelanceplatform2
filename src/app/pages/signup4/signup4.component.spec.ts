import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signup4Component } from './signup4.component';

describe('Signup4Component', () => {
  let component: Signup4Component;
  let fixture: ComponentFixture<Signup4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Signup4Component]
    });
    fixture = TestBed.createComponent(Signup4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
