import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientprofiledoneComponent } from './clientprofiledone.component';

describe('ClientprofiledoneComponent', () => {
  let component: ClientprofiledoneComponent;
  let fixture: ComponentFixture<ClientprofiledoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientprofiledoneComponent]
    });
    fixture = TestBed.createComponent(ClientprofiledoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
