import { Component } from '@angular/core';
import { NgStyle } from '../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  imports: [NgStyle],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {
  students:any[]=[{"name":"Pippo","city":"Topolandia","gender":"M","Present":true},
    {"name":"Pippo","city":"Topolandia","gender":"M","Present":false},
    {"name":"Pluto","city":"Topolandia","gender":"M","Present":true},
    {"name":"Paperina","city":"Paperopoli","gender":"F","Present":false},
    {"name":"Gastone","city":"Paperopoli","gender":"M","Present":true},
    {"name":"Minnie","city":"Topolandia","gender":"F","Present":true},
  ];//potrebbe anche non avere le virgolette sulle chiavi
}
