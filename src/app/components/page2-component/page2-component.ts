import { Component } from '@angular/core';
import { Page2service } from '../../services/page2service/page2service';

@Component({
  selector: 'app-page2-component',
  imports: [],
  templateUrl: './page2-component.html',
  styleUrl: './page2-component.less',
})
export class Page2Component {
  constructor(private noteService: Page2service) {}

  ngOnInit() {
    this.noteService.fetchNotes()
  }

  protected get notes() {
    return this.noteService.getNotes()
  }

  protected get isError() {
    return this.noteService.getError()
  }; 
}
