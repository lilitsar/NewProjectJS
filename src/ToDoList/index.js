import Row from "../components/Row/index.js";

export default class ToDoList{
    constructor(){
        this.onChange = this.onChange.bind(this);
        this.addRow = this.addRow.bind(this);
        this.removeFromList = this.removeFromList.bind(this);
        this.list = [];
        this.ToDoBox = document.createElement("div");
        this.input = document.createElement("input");
        this.addButton = document.createElement("button");
        this.addButton.className = "btn btn-primary";
        this.addButton.type = "button";
        this.addButton.innerText = "Add";
        this.addButton.addEventListener("click", this.addRow);
        this.listBox = document.createElement("div");
        this.ToDoBox.append(this.input);
        this.ToDoBox.append(this.addButton);
        this.box = document.createElement("div");
        this.box.append(this.ToDoBox);
        this.box.append(this.listBox);
    }
    test = () => {};

    removeFromList(){
        this.list = this.list.filter((item) => item.isDeleted === false); 
        this.render();
    }

    onChange(event){
        console.log(event);
    }

    addRow(arg){
        const value = this.input.value;
        //debugger;
        //console.log(arg);
        const row = new Row(value, this.removeFromList, this.onChange);
        this.list.unshift(row);
        this.render();
    }

    render(){
        this.listBox.innerHTML ="";
        this.list.forEach((item) => this.listBox.append(item.html));
    }

    show(){
        this.box.style.display = "block";
    }

    hide(){
        this.box.style.display = "none";
    }

    get html(){
        return this.box;
    }
}