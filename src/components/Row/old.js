export default class Row{
    constructor(value,removeCallback, onChange){
        this.onChange = onChange;
        this.value = value;
        this.remove = this.remove.bind(this,removeCallback);
        this.edit = this.edit.bind(this);     //display none

        ////init ////

        this._box = document.createElement("div");
        this.paragraph = document.createElement("p");
        this.paragraph.innerText = this.value;
        this.editInput = document.createElement("input");
        console.log(this);
      //  this._box.append(this.editBox);
       this._box.append(this.paragraph);

        this.editInput.value = this.value;
        this.editButton = document.createElement("button");
        this.removeButton.innerText = "Remove";
        //create remove  & edit buttons
        this.removeButton = document.createElement("button");

        this.removeButton.addEventListener("click",this.remove);
        this._box.append(this.removeButton);
        //this.editButton.addEventListener("click",this.edit);
        this.editInput.addEventListener("click",this.edit);
        //return this.box();

        this._isDeleted = false;
    }
    // init(){}

    remove(event,removeCallback){
        console.log(arguments);
        this.box.remove();
        this._isDeleted = true;
        // try{
        //     console.log("loader end");
        //     removeCallback();
        // }
        // catch(err){console.warn(err.message)};
       removeCallback && removeCallback();
    //    finally(){
    //        console.log("loader end");
    //    }
    }
    edit(onChange){
       // this.onChange(event);
        //this.editBox.value = value;
      //  this.editInput.value=value; //onchange
    }
    // render(){
    //     return
    // }
    get html(){
        return this.box ? this._box :null;
    }
    get isDeleted(){
        return this._box ? this._box : null;
    }
}
