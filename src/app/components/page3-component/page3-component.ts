import { Component } from '@angular/core';
import { signal, computed} from '@angular/core';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiTextarea} from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { BigNumPipe } from '../../pipes/big-num-pipe';

@Component({
  selector: 'app-page3-component',
  imports: [TuiTextarea, TuiTextfield, FormsModule, BigNumPipe],
  templateUrl: './page3-component.html',
  styleUrl: './page3-component.less',
})
export class Page3Component {
  aValue = signal<string>('');
  bValue = signal<string>('');

  pow_res = computed(() => {
    const a = +this.aValue() || 0;
    const b = +this.bValue() || 0;
    return a ** b;
  })
}
