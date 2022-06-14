import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [
    {text: 'Note one'},
    {text: 'Note two'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}

interface Note {
  text: string;
}
