"use strict";
const inputFieldElement = document.getElementById("input-task");
const submitButtonElement = document.getElementById("submit-task-button");
const taskListElement = document.getElementById("task-list");
const resetButtonelement = document.getElementById("reset");
const checkboxElement = document.querySelectorAll(".checkbox");

const createTask = function () {
  const inputValue = inputFieldElement.value;
  const taskWith15digets = inputValue.slice(0, 15);
  const taskConcat = taskWith15digets.concat();

  const li = document.createElement("li");
  const input = document.createElement("input");
  input.type = "checkbox";
  const span = document.createElement("span");
  span.setAttribute("id", "checked");

  if (!inputValue) {
    alert("Input should not by empty");
    return;
  }

  inputFieldElement.value = "";
  li.appendChild(input);
  li.appendChild(span);
  span.innerHTML = taskConcat;
  taskListElement.appendChild(li);
};

const resetFunction = function () {
  taskListElement.innerHTML = "";
};

submitButtonElement.addEventListener("click", createTask);

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    createTask();
  }
});

document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  if (checkbox.checked) {
    console.log("checked", checkbox);
  }
});

resetButtonelement.addEventListener("click", resetFunction);
