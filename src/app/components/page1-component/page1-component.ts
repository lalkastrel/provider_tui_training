import { Component, OnInit } from '@angular/core';
import {TuiPager} from '@taiga-ui/kit';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { IconsService, IconItem } from '../../services/icons/icons-service';
import { AdminService } from '../../services/admin-service/admin-service';

@Component({
  selector: 'app-page1-component',
  imports: [TuiPager, TuiButton, TuiIcon],
  templateUrl: './page1-component.html',
  styleUrl: './page1-component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page1Component implements OnInit {
  icons: IconItem[] = [];
  currentIcon?: IconItem;
  currentIndex = 0;
  totalIcons = 0;
  constructor(private iconsService: IconsService, private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadIcons();
  }

  private loadIcons(): void {
    this.icons = this.iconsService.getItems();
    this.totalIcons = this.iconsService.getCount();

    this.setCurrentIcon(0);
    console.log(this.icons)
  }

  private setCurrentIcon(index: number): void {
    this.currentIndex = index;
    this.currentIcon = this.iconsService.getItemById(index);
  }
 
  protected prev(): void {
    if (this.currentIndex > 0) {
      this.setCurrentIcon(this.currentIndex - 1);
    }
  }
 
  protected next(): void {
    if (this.currentIndex < this.totalIcons - 1) {
      this.setCurrentIcon(this.currentIndex + 1);
    }
  }

  protected changeToAdmin() {
    this.adminService.changeToAdmin()
  }
    
  protected changeToUser() {
    this.adminService.changeToUser()
  }
}
