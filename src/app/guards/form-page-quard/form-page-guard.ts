import { CanActivateFn } from '@angular/router';

export const formPageGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
