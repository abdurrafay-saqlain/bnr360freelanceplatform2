import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Client4Component } from './client4.component';

describe('Client4Component', () => {
  let component: Client4Component;
  let fixture: ComponentFixture<Client4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Client4Component]
    });
    fixture = TestBed.createComponent(Client4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
