//import alertFun, { obj } from "./App";
//root.innerHTML = "TEST";

// import add_func, {obj} from "./App.js";

// let root = document.getElementById('div_id');
// root.onclick = add_func;

//import "./sass/row.scss";
import App from "./App";

let root = document.getElementById("root");
const app = new App();
root.append(app.html);




