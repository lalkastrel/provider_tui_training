import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { formPageGuardGuard } from './form-page-guard';

describe('formPageGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => formPageGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
