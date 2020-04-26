export default class Row {
    constructor(value, removeCallback, onChange){
        this.value = value;
        this.remove = this.remove.bind(this,removeCallback);
        this.edit = this.edit.bind(this, onChange); 

        this.box = document.createElement("div");
        this.paragraph = document.createElement("p");
        this.paragraph.innerText = this.value;
        console.log(this);
        this.box.append(this.paragraph);

        this.removeButton = document.createElement("button");
        this.removeButton.innerText = "Remove";
        this.removeButton.addEventListener("click",this.remove);
        this.box.append(this.removeButton);

        this.editButton = document.createElement("button");
        this.editButton.innerText = "Edit";
        this.editButton.addEventListener("click",this.edit);
        this.box.append(this.editButton);
    }

    remove(removeCallback, event){
        console.log(arguments);
        this.box.remove();
        removeCallback && removeCallback();
    }
    
    edit(onChange){
        this.editBox = document.createElement("input");
        this.box.append(this.editBox);  
        this.editBox.value = this.value;
    }

    get html(){
        return this.box ? this.box :null ;
    }

}