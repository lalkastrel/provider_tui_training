import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin-guard/admin-guard';
import { AdminComponent } from './components/admin-component/admin-component';
import { Page1Component } from './components/page1-component/page1-component';
import { Page2Component } from './components/page2-component/page2-component';
import { Page3Component } from './components/page3-component/page3-component';
import { Page4Component } from './components/page4-component/page4-component';



export const routes: Routes = [
  { path: 'page-1', component: Page1Component },
  { path: 'page-2', component: Page2Component },
  { path: 'page-3', component: Page3Component },
  { path: 'page-4', component: Page4Component },
  { path: 'admin-page', component: AdminComponent, canActivate: [adminGuard] },
  { path: '', redirectTo: '/page-1', pathMatch: 'full' },
  { path: '**', redirectTo: '/page-1' } // 404 → page-1
];
