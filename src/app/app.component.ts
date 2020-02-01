import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'NG421wk1day1ToDoApp';
// }

export class AppComponent {
  title = 'Todos';
  todoList: any[] = [];
  todoTitle: string;

  ngOnInit() {
  this.todoTitle = ' ';
  this.todoList = [
    {title:'Todo', isDone:false}
  ];
  console.log(this.todoList);
}

addTodo():void{
  this.todoList.push({
    title: this.todoTitle,
    isDone: false
  });
 // idk why we set this to an empty string yet
  this.todoTitle = ' ';
}

deleteTodo(todo:any) {
  const index = this.todoList.findIndex(todoItem => todoItem === todo);
  this.todoList.splice(index,1);
}
}

