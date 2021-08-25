import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {
  @Input() newTodos:string[]= []
  list:string="";
  constructor() { }

  ngOnInit(): void {
  }
add(data:string):void{
 if(data!==""){
  this.newTodos.push(data)
 }
}
}
