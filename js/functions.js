function sendData() {
  newTask = { ...task };
  newTask.taskName = taskName.value;
  newTask.taskDate = taskDate.value;
  newTask.taskTime = taskTime.value;
  userTask.addTask(newTask);
//   userTask.redraw();
  clearForm();
}
function init() {
  if (localStorage.getItem("tasks")) {
    allTasks = JSON.parse(localStorage.getItem("tasks"));
  } else {
    userTask.allTasks = [];
  }
}
function clearForm() {
  taskName.value = "";
  taskDate.value = "";
  taskTime.value = "";
}
function deleteTask(number) {
  localStorage.removeItem(number);
  document.getElementById(number).remove();
}
