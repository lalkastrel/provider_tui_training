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
  private isError = signal<Boolean>(false)

  constructor(private http: HttpClient) {}

  fetchNotes() {
    this.http.get<Note[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.notes.set(data)
        this.isError.set(false)
      },
      error: (error) => {
        console.error(`Ошибка загрузки метод по адресу ${this.apiUrl}`);
        this.notes.set([])
        this.isError.set(true)
      }
    });
  }

  getNotes() {
    return this.notes
  } 
  getError() {
    return this.isError
  }
}
