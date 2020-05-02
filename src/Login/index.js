export default class Loginlist {
    constructor(){
        this.loginList = this.loginList.bind(this);
        this.list = [];
        this.loginBox = document.createElement("div");
        this.login = document.createElement("input");
        this.logbutton = document.createElement("button");
        this.logButton.innerText = "Login";
        this.logButton.addEventListener("click", this.loginList);
        this.listbox = document.createElement("div");
        this.loginBox.append(this.login);
        this.loginBox.append(this.logbutton);
        this.box = document.createElement("div");
        this.box.append(this.loginBox);
        this.box.append(this.listBox2);
    }
    get html(){
        return this.box;
    }

}