import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from '../note';

@Injectable()
export class NotesService {

  constructor() {

  }

  getNotes(): Observable<Array<Note>> {
    return;
  }

  addNote(note: Note): Observable<Note> {
    return;
  }

}
