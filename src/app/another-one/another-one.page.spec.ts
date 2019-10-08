import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherOnePage } from './another-one.page';

describe('AnotherOnePage', () => {
  let component: AnotherOnePage;
  let fixture: ComponentFixture<AnotherOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherOnePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
