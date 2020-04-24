import Row from "./components/Row";
import { render } from "node.sass";

export default class ToDoList{
    constructor(){
    this.onChange =
    this.removeFromList = this.removeFromList.bind(this);
    this.addRow = this.addRow.bind(this);   
    this.list = [];
    this.todo_boxx = document.createElement("div");
    this.input = document.createElement("input");
    this.addButton = document.createElement("button");   
    this.list_box = document.createElement("div");

    this.todo_box.append(this.input);
    this.todo_box.append(this.addButton);
    this._box = document.createElement("div");
    this._box.append(list_box);
    this._box.append(todo_box);
    this.test = () => {};}
// init{}


removeFromList(){
    this.list = this.list.filter((item)=> item.isDeleted === false); 
    this.render();
}

onChange(event){
    console.log(event);
}

addRow(arg){
    const value = arg.target.value;
    const row = new Row(value,this.removeFromList, this.onChange);
   // row.init();
    this.list.push(row);
    this.render();
    }
render(){
   // _box.append(this.list);
   const htmlRows = this.list.map(item => item.html); 
   list_box.append.(htmlRows);
}

get html(){
    return this._box;
}

}