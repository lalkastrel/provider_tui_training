import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Note {
  id: number,
  title: string,
  content: string
}

@Injectable({
  providedIn: 'root',
})
export class Page2service {
  private readonly apiUrl = 'http://localhost:3000/notes'

  private notes = signal<Note[]>([])

  constructor(private http: HttpClient) {}

  fetchNotes() {
    this.http.get<Note[]>(this.apiUrl).subscribe( (data) => {
      this.notes.set(data);
    });
  }

  getNotes() {
    return this.notes
  } 
}
