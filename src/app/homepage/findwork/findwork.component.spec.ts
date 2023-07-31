import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindworkComponent } from './findwork.component';

describe('FindworkComponent', () => {
  let component: FindworkComponent;
  let fixture: ComponentFixture<FindworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindworkComponent]
    });
    fixture = TestBed.createComponent(FindworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
