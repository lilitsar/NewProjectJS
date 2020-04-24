export default class Row{
    constructor(value,removeCallback, onChange){
        this.onChange = onChange;
        this.value = value;
        this.remove = this.remove.bind(this,removeCallback);
        this.edit = this.edit.bind(this);     //display none

        ////init ////
        this.box = document.createElement("div");
        this.paragraph = document.createElement("div");
        this.editInput = document.createElement("input");
        console.log(this);
        this.rowBow.append(this.paragraph);
        this.rowBow.append(this.paragraph);

        this.editInput.value = this.value;
        this.editButton = document.createElement("button");

        //create remove  & edit buttons
        this.removeButton = document.createElement("button");
        this.removeButton.addEventListener("click",this.remove);
        //this.editButton.addEventListener("click",this.edit);
        this.editInput.addEventListener("click",this.edit);
        //return this.box();
        
        this._isDeleted == false;
    }
    // init(){}

    remove(removeCallback,event){
        console.log(arguments);
        this.box.remove();
        this._isDeleted = true;
        try{
            console.log("loader end");
            removeCallback();
        }
        catch(err){console.warn(err.message)};
       // removeCallback && removeCallback();
       finally{
           console.log("loader end");
       }
    }
    edit(onChange){
        this.onChange(event);

      //  this.editInput.value=value; //onchange
    }
    // render(){
    //     return
    // }
    get html(){
        return this.box ? this._box :null;
    }
    get isDeleted(){
        return this._isDeleted;
    }
}
