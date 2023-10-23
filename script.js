const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

function addTask(){
    if (inputBox.value === ''){
        alert ("Write something!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
    }
    inputBox.value = "";
}