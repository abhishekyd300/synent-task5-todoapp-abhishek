let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Load tasks on page load
window.onload = function () {
    renderTasks();
};

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    saveTasks();
    renderTasks();

    input.value = "";
}

function renderTasks() {
    const list = document.getElementById("taskList");

    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span class="task-text ${task.completed ? "completed" : ""}"
                onclick="toggleTask(${index})">
                ${task.text}
            </span>

            <button class="delete-btn"
                onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        list.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed =
        !tasks[index].completed;

    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);

    saveTasks();
    renderTasks();
}