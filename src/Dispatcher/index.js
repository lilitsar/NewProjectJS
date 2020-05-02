export default class Dispatcher{
    constructor(){
        this.listen = this.listen.bind(this);
        this.listeners = [];
    }

    set listeners(func){
        if(func === "function"){
            this.listeners.push(func);
        }
    }

    listen(data){
        this._listeners.forEach((item) => typeof item === "function" && item(data));
    }
}