
//import { remove_func } from "./remove.js";

import ToDoList from "./ToDoList/index.js";

export default class App {
  constructor(){
    const todo = new ToDoList();
    this.box = todo.html;
  }
  get html(){
    return this.box;
  }
}
