import { Component } from '@angular/core';
import {TuiTabs} from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [TuiTabs, RouterModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.less',
  standalone: true,
})
export class Navigation {
  activeItemIndex = 1;
}
