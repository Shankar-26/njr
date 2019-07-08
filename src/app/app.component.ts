import { Component } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  note: Note = new Note();
  noteList:Array<Note>=[];

  takeNotes() {
    //console.log(this.note);
    //this.note=new Note();
    this.noteList.push(this.note);
    this.note=new Note();
  }
}
