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
      completion: "Not complete"
    };
    i++;
    todo.push(tasks);
    renderTasks();
    inputTask.value = "";
  } else {
    alert("Please enter a task.");
  }
});

function newTaskGenerator(todoitem) {
  return `<input type="checkbox" id="${todoitem.id}" /><label>${todoitem.description}</label>
  <button class="border " type="button" onclick=markDone(${todoitem.id})>${todoitem.completion}</button>
  <button class="border btn2" type="button" onclick=deleteTask(${todoitem.id})>Delete</button><br />`;
}
function renderTasks() {
  taskList.innerHTML = "";
  for (i = 0; i < todo.length; i++) {
    const item = todo[i];
    const newTask = newTaskGenerator(item);
    taskList.innerHTML += newTask;
  }
}

function deleteTask(id) {
  for (i = 0; i < todo.length; i++) {
    if (id == todo[i].id) {
      todo.splice(i, 1);
      renderTasks();
    };
  };
};
function markDone(id){
  for (i=0; i<todo.length; i++){
    if (id==todo[i].id){
      todo.completion[i]="Complete";
      
      renderTasks();
    }
  }
}