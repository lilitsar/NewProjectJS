
//import { remove_func } from "./remove.js";

import ToDoList from "./ToDoList/index.js";
import Dispatcher from "./Dispatcher/index.js"
import Menu from "./components/Menu/index.js"
//import Loginlist from "./Login/index.js";

export default class App {
  constructor(){
    this.route = this.rout.bind(this);
    this.hideAll = this.hideAll.bind(this);

    this.dispatcher = new Dispatcher();
    this.dispatcher.listeners = this.rout;
    this.todo = new ToDoList();
    this.menu = new Menu(this.dispatcher);
    this.box = document.createElement("div");
    this.box.append(this.menu.html);
    
    //this.box = todo.html;
    this.box.append(this.todo.html);
    
    // this.list = new Loginlist();
    // this.box.append(list.html);
  }

  rout(data){
    this.hideAll();
    switch (data) {
      case "login":
        //this.login.show();
        break;
        case "todo":
        this.todo.show();
          break;
      default:
        break;
    }

  }

    hideAll(){

      this.todo.hide();
    }
    
  get html(){
    return this.box ;//this.box2;
  }
}
