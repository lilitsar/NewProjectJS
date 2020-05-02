export default class Menu {
    constructor(listen){
        this.clickMenuItem = this.clickMenuItem.bind(this);
        this.listen = listen;
        this.login = document.createElement("button");
        this.todo = document.createElement("button");
        this.box = document.createElement("div");
        this.login.innerText ="Login";
        this.todo.innerText ="ToDo";
        this.login.data_value ="login";
        this.todo.data_value ="todo";
        this.box.append(this.login);
        this.box.append(this.todo);
        this.login.addEventListener("click", this.clickMenuItem);
        this.todo.addEventListener("click", this.clickMenuItem);
    }

    clickMenuItem(event){
        //this.listen("Login");
        this.listen(event.target.value);
    }

    get html(){
        return this.box ? this.box :null ;
    }

}