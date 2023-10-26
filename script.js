const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

// the box where you write tasks
function addTask(){

    // if nothing is written, a message displays
    if (inputBox.value === ''){
        alert ("Write something!")
    }

    // if something is written, it is added to the list
    else {
        // the creation of the checkbox
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);

        // the creation of the x
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    // to make the box empty after something is added
    inputBox.value = "";
}

// clicking the x or the checkbox
taskList.addEventListener("click", function(e){

    // checkbox
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }

    // the x
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);