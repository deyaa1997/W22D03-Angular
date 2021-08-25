import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {TodosComponentComponent} from './todos-component/todos-component.component'

const routes: Routes = [ 
  { path:'home', component : AppComponent },
  { path:'todos', component : TodosComponentComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
