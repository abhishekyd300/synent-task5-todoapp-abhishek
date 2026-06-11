let tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];

renderTasks();

function saveTasks() {
localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);
}

function addTask() {

const input =
document.getElementById(
"taskInput"
);

const text =
input.value.trim();

if (!text) {
alert("Enter a task");
return;
}

tasks.push({
text,
completed: false
});

saveTasks();

renderTasks();

input.value = "";

}

function toggleComplete(index){

tasks[index].completed =
!tasks[index].completed;

saveTasks();

renderTasks();

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

renderTasks();

}

function renderTasks(){

const list =
document.getElementById(
"taskList"
);

list.innerHTML = "";

tasks.forEach((task,index)=>{

const li =
document.createElement("li");

li.className = "task";

li.innerHTML = `
<div class="task-text ${task.completed ? "completed" : ""}">
${task.text}
</div>

<div class="actions">

<button
class="complete-btn"
onclick="toggleComplete(${index})">

${task.completed ? "Undo" : "Complete"}

</button>

<button
class="delete-btn"
onclick="deleteTask(${index})">

Delete

</button>

</div>
`;

list.appendChild(li);

});

}