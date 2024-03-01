let inputTask = document.getElementById("inputTask");
const submit = document.getElementById("submit");
let taskList = document.getElementById("taskList");
let todo = [];
let i = 1;

submit.addEventListener("click", function () {
  if (inputTask.value != "") {
    const tasks = {
      id: i,
      name: "task",
      description: inputTask.value,
    };
    i++;
    todo.push(tasks);
    renderTasks();
    inputTask.value = "";
  } else {
    alert("Please enter a task.");
  }
});

function renderTasks() {
  taskList.innerHTML = "";
  for (i = 0; i < length.todo; i++) {
    const item = todo[i];
    const newTask = newTaskGenerator(item);
    taskList.innerHTML += newTask;
  };
}

function newTaskGenerator(todoitem) {
  return `<div><input type="checkbox" id=${todoitem.id} name=${todoitem.name}/><label></label><br /></div>`;
}

