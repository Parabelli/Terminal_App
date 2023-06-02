// MY TASK MANAGER - TERMINAL

// SETUP CODE
let prompt = require("prompt-sync")();

let tasks = ["task1", "task2", "task3"];

// FUNCTION

function addtask(add) {
  tasks.push(add);
}

function deltask(del) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] == del) {
      tasks.splice(i, 1);
    }
  }
}

function checktask(check) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] == check) {
      tasks[i] = tasks[i] + " \u2713";
    }
  }
}

// EXECUTE

function Menu() {
  console.log(
    "Welcome to your task manager, Press:\n1. to see all your tasks\n2. to add a task\n3. to delete a task\n4. to mark a task as done\n5. to Exit the task manager"
  );
  let number = prompt();
  if (number == 1) {
    console.log(tasks);
    console.log(Menu());
    return "";
  } else if (number == 2) {
    let add = prompt("add a task : ");
    addtask(add);
    console.log(Menu());
    return "";
  } else if (number == 3) {
    let del = prompt("delete a task : ");
    deltask(del);
    console.log(Menu());
    return "";
  } else if (number == 4) {
    let check = prompt("check a task : ");
    checktask(check);
    console.log(Menu());
    return "";
  } else if (number == 5) {
    return "closing";
  }
}
console.log(Menu());
