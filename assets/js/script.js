let inputBox =document.getElementById("input-box");
let listcontainer = document.getElementById("list-container");

function AddTask() {
    

    if(inputBox.value === ''){
        alert("write a task!");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "X";
        li.appendChild(span); 
     }
    inputBox.value ='';
    saveData()
}

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

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function displayTask() {
    listcontainer.innerHTML = localStorage.getItem("data");

}
displayTask();