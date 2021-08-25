import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() name:string = ""
  toDos: string[] = ["Eat" , "Play" , "Sleep"]
  email:string = ""

  constructor() { }

  ngOnInit(): void {
  }

  showMe(todo :string): void  {
    console.log(todo);
  }

}
