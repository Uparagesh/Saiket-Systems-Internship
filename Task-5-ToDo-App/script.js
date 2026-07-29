const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {

    if(taskInput.value === ""){
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
    <span>${taskInput.value}</span>
    <button class="editBtn">Edit</button>
    <button class="deleteBtn">Delete</button>
    `;
    taskList.appendChild(li);

    const taskText = li.querySelector("span")
    taskText.addEventListener("click", function(){
        taskText.classList.toggle("completed");
    });

    const editBtn = li.querySelector(".editBtn");
    editBtn.addEventListener("click", function(){
        const updatedTask = prompt("Edit your task: ", taskText.innerText);
        if(updatedTask != null && updatedTask.trim() !== ""){
            taskText.innerText = updatedTask;
        }
    });

    const deleteBtn = li.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function(){
        li.remove();
    });

    taskInput.value = "";

}
