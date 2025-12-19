import { Component, signal } from '@angular/core';
import { Note, Page2service } from '../../services/page2service/page2service';
import { rxResource } from '@angular/core/rxjs-interop'
import { catchError, EMPTY, Observable, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-page2-component',
  imports: [AsyncPipe],
  templateUrl: './page2-component.html',
  styleUrl: './page2-component.less',
})
export class Page2Component {
  constructor(private noteService: Page2service) {}
  notes$!: Observable<Note[]>

  readonly isError = signal(false)

  ngOnInit() {
    this.notes$ = this.noteService.getNotes().pipe(tap(() => {
      this.isError.set(false)
    }),
  catchError(() => {
      console.error(`Ошибка загрузки`); 
      this.isError.set(true)
      return EMPTY    
    }))
  }
}
