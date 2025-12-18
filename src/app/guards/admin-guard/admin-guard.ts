import { CanActivateFn } from '@angular/router';
import { AdminService } from '../../services/admin-service/admin-service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const adminService = inject(AdminService);
  console.log(adminService.adminState)
  return adminService.adminState;
};
