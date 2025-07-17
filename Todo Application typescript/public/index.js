"use strict";
let input = document.getElementById("input");
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let task = document.getElementById("task");
function addt() {
    if (input.value == "") {
        alert("Please enter value");
    }
    else {
        task.innerHTML += `
      <br>
      <li>
        ${input.value}
        <button onclick="this.parentElement.remove()">Delete</button>
        <button onclick="editTask(this)">Edit</button>
      </li>
    `;
        input.value = "";
    }
}
function d() {
    task.innerHTML = "";
}
function editTask(button) {
    var _a;
    let li = button.parentElement;
    let oldText = ((_a = li.childNodes[0].textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "";
    li.innerHTML = `
    <input type="text" value="${oldText}">
    <button onclick="saveTask(this)">Save</button>
    <button onclick="this.parentElement.remove()">Delete</button>
  `;
}
function saveTask(button) {
    let li = button.parentElement;
    let inputBox = li.querySelector("input");
    let newText = inputBox.value;
    li.innerHTML = `
    ${newText}
    <button onclick="this.parentElement.remove()">Delete</button>
    <button onclick="editTask(this)">Edit</button>
  `;
}
