// սարքել մի հատ text input ու add button,
// նոր տողի մեջ պետքա լինի input-ի մեջ գրած տեքսը ու կողքը լինի remove button
// որի վրա սեխմեկուց պետքա ջնջվի տողը , 
import { remove_func } from "./remove.js";

import ToDoList from "./ToDoList";

/*
export function add_func() {
  var input = document.createElement('input');
  var linebreak = document.createElement('br');
  var cp = document.getElementById('input_id');
  input.value = cp.value;
  //arr.push(input.value); 
  var userId = "user";
  var i = 0;
  var x = document.getElementsByTagName('input').length - 2;
  for (i = 0; i < x; i++) {
    i;
  }
  //console.log(arr);
  input.id='usid';
  input.id.value = userId + i;
  input.type = 'text';
  input.name = 'user[]';
  let user1 = document.getElementById('div_id');
  user1.appendChild(input);
  user1.appendChild(lineBreak);

  let k = document.createElement('button');
  k.innerHTML = 'Remove' ; 
  k.id = 'k_id';  
  document.body.append(k);  
  k.addEventListener('click', remove_func);

};
//export const obj = {};
// export function add_lilit() {
//   };

*/


class App {
  constructor{
    const todo = ToDoList();
    this._box = todo.html;
  }
  get html(){
    return this._box;
  }
}
