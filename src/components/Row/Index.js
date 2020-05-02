export default class Row {
    constructor(value, removeCallback, onChange){
        this.onChange = onChange;
        this.value = value;
        this.remove = this.remove.bind(this,removeCallback);
        this.edit = this.edit.bind(this, onChange); 

        this.box = document.createElement("div");
        this.paragraph = document.createElement("p");
        this.paragraph.innerText = this.value;
        this.editBox = document.createElement("input");
        console.log(this);
        this.box.append(this.paragraph);
        this.box.append(this.editBox);

        this.editButton = document.createElement("button");
        this.editButton.innerText = "Edit";
        this.editButton.addEventListener("click",this.edit);
        this.box.append(this.editButton);
        
        //this.isDeleted = false;

        this.removeButton = document.createElement("button");
        this.removeButton.innerText = "Remove";
        this.removeButton.addEventListener("click",this.remove);
        this.box.append(this.removeButton);
    }

    remove(removeCallback, event){
        //console.log(arguments);
        this.box.remove();
        this.isDeleted = true;
        try{
            console.log("loader start");
            removeCallback();
        }
        catch(err) {
         console.warn(err.message); 
        }finally{
            console.log("loader end");  
        }
        //removeCallback && removeCallback();
        
    }
    
    edit(onChange){
        this.onChange(event);
        this.editBox.innerText = "edited";
    }

    get html(){
        return this.box ? this.box :null ;
    }

    get isDeleted(){
        return this.isDeleted;
    }
}