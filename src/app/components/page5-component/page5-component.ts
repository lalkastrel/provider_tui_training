import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiIcon } from '@taiga-ui/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-page5-component',
  imports: [ReactiveFormsModule, TuiIcon],
  templateUrl: './page5-component.html',
  styleUrl: './page5-component.less',
})
export class Page5Component {
  fb = inject(FormBuilder);
  cdr = inject(ChangeDetectorRef)

  baseInfoForm = this.fb.group({
    fullName: this.fb.group({
      firstName: ['', Validators.required],
      secondName: [''],
      surname: [''],
    }),
    age: this.fb.control<number>(0, [Validators.min(0), Validators.max(150), Validators.required]),
    hobbies: this.fb.array([this.fb.control('')])
  })

  get hobbiesArray(): FormArray {
    return this.baseInfoForm.get('hobbies') as FormArray;
  }

  addHobbie() {
    this.hobbiesArray.push(this.fb.control(''))
    this.cdr.detectChanges()
  }

  deleteHobbie(index: number) {
    this.cdr.detectChanges()
    this.hobbiesArray.removeAt(index);
    this.cdr.detectChanges()

    if (this.hobbiesArray.length === 0) {
      this.addHobbie();
    }
    this.cdr.detectChanges()
  }

  constructor() {}
}
