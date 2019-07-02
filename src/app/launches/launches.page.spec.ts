import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesPage } from './launches.page';

describe('LaunchesPage', () => {
  let component: LaunchesPage;
  let fixture: ComponentFixture<LaunchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
