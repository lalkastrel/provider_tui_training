import { TestBed } from '@angular/core/testing';

import { Page2service } from './page2service';

describe('Page2service', () => {
  let service: Page2service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page2service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
