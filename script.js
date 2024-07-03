let Container = document.getElementById("container1");

function newTaskClicked(){
    let div = document.createElement("div");
    div.setAttribute("class", "onetask");
    div.setAttribute("draggable", "true");
    div.innerHTML +=`
                    <div class="description">
                        <input type="text" placeholder="write your task here" class="about-task">
                        <button onclick="taskSaved(this)">save</button>
                    </div>
                    <span class="edit">edit</span>
                    <span class="delete">delete</span>
                    <span class="status">* ongoing</span>
                 <!--clicking on it will make it done-->`;
    return div;
}

function taskSaved(ele){
    let descriptorBox = ele.closest('.description');
    let taskSAving = descriptorBox.querySelector('.about-task');
    let taskToBeSaved = taskSAving.value;
    descriptorBox.innerHTML=`<div class="description">
    <span class="about-task">${taskToBeSaved}</span>
</div>`
}

Container.addEventListener("click", function(e){
    let addTaskClicked = e.target.classList.contains("addTask");
    let tasksContainer = document.getElementById("tasks");

    if(addTaskClicked){
        //the new task will be popped
        console.log("new task here");
        if(tasksContainer)
            {
                tasksContainer.appendChild(newTaskClicked());
            }
    }
})


document.addEventListener("dragstart", function(e) {
    if (e.target.classList.contains("onetask")) {
        e.dataTransfer.setData("text/plain", e.target.id);
        e.dataTransfer.effectAllowed = "move";
    }
});

document.addEventListener("dragover", function(e) {
    e.preventDefault();
});

document.addEventListener("drop", function(e) {
    e.preventDefault();
    let id = e.dataTransfer.getData("text");
    let draggableElement = document.getElementById(id);
    let dropzone = e.target.closest(".container2");
    if (dropzone && draggableElement) {
        dropzone.appendChild(draggableElement);
    }
});

document.addEventListener("drop", function(e) {
    e.preventDefault();
    let id = e.dataTransfer.getData("text");
    let draggableElement = document.getElementById(id);
    let dropzone = e.target.closest(".container3");
    if (dropzone && draggableElement) {
        dropzone.appendChild(draggableElement);
    }
});

document.addEventListener("drop", function(e) {
    e.preventDefault();
    let id = e.dataTransfer.getData("text");
    let draggableElement = document.getElementById(id);
    let dropzone = e.target.closest(".container1");
    if (dropzone && draggableElement) {
        dropzone.appendChild(draggableElement);
    }
});

// To dynamically assign IDs to new tasks
document.addEventListener("click", function(e) {
    let newTasks = document.querySelectorAll('.onetask');
    newTasks.forEach((task, index) => {
        if (!task.id) {
            task.id = `task${index + 1}`;
        }
    });
});