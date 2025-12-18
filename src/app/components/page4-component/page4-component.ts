import { Component } from '@angular/core';
import { AdminService } from '../../services/admin-service/admin-service';
import { TuiButton } from '@taiga-ui/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-page4-component',
  imports: [TuiButton],
  templateUrl: './page4-component.html',
  styleUrl: './page4-component.less',
})
export class Page4Component {
  constructor(private adminService: AdminService, private router: Router) {}

  getAdminState() {
    return this.adminService.adminState
  }

  navigateToAdminPage() {
    if (this.adminService.adminState) {
      this.router.navigate(['/admin-page']);
    }
  }
}
