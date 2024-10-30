// Select elements
const taskInput = document.getElementById("taskInput");
const dueDateInput = document.getElementById("dueDateInput");
const priorityInput = document.getElementById("priorityInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Load tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        addTaskToDOM(task.text, task.dueDate, task.priority);
    });
}

// Function to add a task to DOM
function addTaskToDOM(taskText, dueDate, priority) {
    const li = document.createElement("li");
    li.textContent = `${taskText} - Due: ${dueDate} - Priority: ${priority}`;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
        removeTaskFromStorage(taskText);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;

    if (taskText && dueDate) {
        addTaskToDOM(taskText, dueDate, priority);
        saveTaskToStorage(taskText, dueDate, priority);
        taskInput.value = ""; // Clear input field
        dueDateInput.value = ""; // Clear date input
    }
}

// Save task to local storage
function saveTaskToStorage(taskText, dueDate, priority) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: taskText, dueDate, priority });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task from local storage
function removeTaskFromStorage(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add event listener to button
addTaskButton.addEventListener("click", addTask);

// Optional: Add task by pressing Enter key
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Load tasks on page load
loadTasks();


const filterInput = document.getElementById("filterInput");

filterInput.addEventListener("input", function() {
    const filterValue = filterInput.value.toLowerCase();
    const tasks = taskList.getElementsByTagName("li");

    for (let i = 0; i < tasks.length; i++) {
        const taskText = tasks[i].textContent.toLowerCase();
        if (taskText.includes(filterValue)) {
            tasks[i].style.display = "";
        } else {
            tasks[i].style.display = "none";
        }
    }
});
