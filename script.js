"use strict";
const inputFieldElement = document.getElementById("input-task");
const submitButtonElement = document.getElementById("submit-task-button");
const taskListElement = document.getElementById("task-list");
const resetButtonelement = document.getElementById("reset");

const createTask = function () {
  const inputValue = inputFieldElement.value;
  const newTask = `<li><input type="checkbox" id="checkbox"> <span>${inputValue}</span></li>`;

  if (!inputValue) return;
  taskListElement.innerHTML += newTask;
};

submitButtonElement.addEventListener("click", createTask);

document.addEventListener("keypress", (e) => {
  console.log(e);
  if (e.key === "Enter") {
    createTask();
  }
});

const resetFunction = function () {
  taskListElement.innerHTML = "";
};

resetButtonelement.addEventListener("click", resetFunction);
