
//import { remove_func } from "./remove.js";

import ToDoList from "./ToDoList";

export default class App {
  constructor(){
    const todo = new ToDoList();
    this._box = todo.html;
  }
  get html(){
    return this._box;
  }
}
