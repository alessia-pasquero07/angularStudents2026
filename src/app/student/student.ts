import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common'; 


@Component({
  imports: [NgStyle,NgClass],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
const M_COLOR="lightblue";
const  F_COLOR="pink";

export class Student {
 
  students:any[]=[{"name":"Pippo","city":"Topolandia","gender":"M","Present":true},
    {"name":"Pippo","city":"Topolandia","gender":"M","Present":false},
    {"name":"Pluto","city":"Topolandia","gender":"M","Present":true},
    {"name":"Paperina","city":"Paperopoli","gender":"F","Present":false},
    {"name":"Gastone","city":"Paperopoli","gender":"M","Present":true},
    {"name":"Minnie","city":"Topolandia","gender":"F","Present":true},
  ];//potrebbe anche non avere le virgolette sulle chiavi
  
    getSyle(s){
        return {
            'background-color': s.gender == 'F' ?  F_COLOR: M_COLOR
        }
    }
}
