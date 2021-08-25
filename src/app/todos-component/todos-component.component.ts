import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-component',
  templateUrl: './todos-component.component.html',
  styleUrls: ['./todos-component.component.css']
})
export class TodosComponentComponent implements OnInit {
  todos: string[] = ["sleep", "eating", "coding"];
  comp: string[] = []
  show: boolean = false
  num:number=0
  list:string=""
  constructor() { }

  ngOnInit(): void {
  }
  delete(ind: number): void {
    this.todos.splice(ind, 1)
  }
  complete(ind: number): void {
    let value: string = this.todos[ind]
    this.todos.splice(ind, 1)
    this.comp.push(value)
  }
  update(ind: number): number {
    console.log(this.show)
    this.show = !this.show;
    console.log(this.show)
    this.num=ind
    return this.num
  }
  update2(ind: number,str:string): void {
    if(str!==""){
    this.todos[ind]=str
    }
    this.show=false;
  }
}
