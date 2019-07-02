import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastLaunchesPage } from './past-launches.page';

describe('PastLaunchesPage', () => {
  let component: PastLaunchesPage;
  let fixture: ComponentFixture<PastLaunchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastLaunchesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastLaunchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
