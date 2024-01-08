
import { AddTask } from "./addTask.js";
import { saveData } from "./saveData.js";
import { displayTask } from "./displayTask.js";

let inputBox =document.getElementById("input-box");
let listcontainer = document.getElementById("list-container");
 let btn = document.getElementById("btn");
 btn.addEventListener('click', AddTask);


AddTask();


listcontainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if( e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

saveData();
displayTask();

