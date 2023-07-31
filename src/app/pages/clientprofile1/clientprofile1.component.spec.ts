import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clientprofile1Component } from './clientprofile1.component';

describe('Clientprofile1Component', () => {
  let component: Clientprofile1Component;
  let fixture: ComponentFixture<Clientprofile1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clientprofile1Component]
    });
    fixture = TestBed.createComponent(Clientprofile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
