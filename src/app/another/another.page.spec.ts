import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherPage } from './another.page';

describe('AnotherPage', () => {
  let component: AnotherPage;
  let fixture: ComponentFixture<AnotherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
