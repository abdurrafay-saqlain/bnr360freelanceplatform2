import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clientprofile2Component } from './clientprofile2.component';

describe('Clientprofile2Component', () => {
  let component: Clientprofile2Component;
  let fixture: ComponentFixture<Clientprofile2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Clientprofile2Component]
    });
    fixture = TestBed.createComponent(Clientprofile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
