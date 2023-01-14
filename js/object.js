let taskName = document.getElementById("taskName");
let taskDate = document.getElementById("taskDate");
let taskTime = document.getElementById("taskTime");
let myCounter = Number(localStorage.getItem("myCounter"));
let res =document.getElementById("res");

const task = {
  taskName: "",
  taskDate: "",
  taskTime: "",
};

const userTask = {
  allTasks: [],
  addTask: (newTask) => { 
    userTask.allTasks.push(newTask);
    userTask.saveLocal(newTask);
  },
  saveLocal: () => {
    localStorage.setItem("tasks", JSON.stringify(userTask.allTasks));
  },
  get getTasksDiv() {
    let divString = "";
    userTask.allTasks.map((item) => {
        divString += `
        <div class="newNote" id="${item.taskName}">
        <div class="daNote">
        <form class="X"><h4 class="theX bi bi-x-circle-fill" onclick="deleteTask(item.taskName)">Delete</h4></form>
        <span id="taskName">${item.taskName}</span><br />
        <span id="taskName">${item.taskDate}</span><br />
        <span id="taskName">${item.taskTime}</span><br />
        </div>
        </div>
        `;
        });
        return divString;
    },
    // redraw:()   => {
    //     // let res = document.getElementById("res");
    //     res.innerHTML = userTask.getTasksDiv.divString.divString;
    // },
}















































//   notDoneTasks: [],
//   loadTasks: () => {
//     userTask.allTasks = JSON.parse(localStorage.getItem("tasks"));
//   },
//   saveTasks: () => {
//     localStorage.setItem("tasks", JSON.stringify(userTask.allTasks));
//   },
//   finish: (existTask) => {},
//   set todo(newTask) {
//     this.allTasks.push(newTask);
//     this.notDoneTasks.push(newTask);
//     userTask.saveTasks();
//   },
//   addTask: (newTask) => {
//     userTask.allTasks.push(newTask);
//     userTask.saveTasks();
//   },
//   divBuilder() {
//     let divString = "";
//     this.allTasks.map((item) => {
//       divString += `
//             <div id=${item.taskName}  class="background-card">
//             //what to do with X (close task=delete task)
//             <h2>$('task-name').val(item.taskName)</h2>
//             </div>
//             `;
//     });
//   },
// };
