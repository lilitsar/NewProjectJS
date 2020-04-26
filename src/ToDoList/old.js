import Row from "../components/Row";
//import { render } from "node.sass";

export default class ToDoList{
    constructor(){
    this.removeFromList = this.removeFromList.bind(this);
    this.addRow =this.addRow.bind(this);
    //this.onChange =
    this.removeFromList = this.removeFromList.bind(this);
    this.addRow = this.addRow.bind(this);   
    this.list = [];
    this.todobox = document.createElement("div");
    this.input = document.createElement("input");
    this.addButton = document.createElement("button");   
    this.addButton.innerHTML = "Add";
    this.addButton.addEventListener("click", this.addRow);
    this.listbox = document.createElement("div");
    this.todobox.append(this.input);
    this.todobox.append(this.addButton);
    this._box = document.createElement("div");
    this._box.append(this.todobox);
    this._box.append(this.listbox);
    this.test = () => {};
// init{}

removeFromList(){
    this.list = this.list.filter((item)=> item._isDeleted === false); 
    this.render();
}

// onChange(event){
//     console.log(event);
// }

// removeFromList() {}

addRow(arg){
    const value = this.input.value;
    console.log(arg);
    const row = new Row(value,this.removeFromList);// this.onChange);
   // row.init();
    this.list.unshift(row);
    this.render();
    }

render(){
     box.append(this.list);
   this.list.forEach(item => this.listbox.append(item.html)); 
}

get html(){
    return this._box;
}

}