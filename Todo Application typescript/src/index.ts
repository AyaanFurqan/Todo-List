let input = document.getElementById("input") as HTMLInputElement;
let btn1 = document.getElementById("btn-1") as HTMLButtonElement;
let btn2 = document.getElementById("btn-2") as HTMLButtonElement;
let task = document.getElementById("task") as HTMLElement;

function addt() {
    if (input.value == "") {
        alert("Please enter value");
    } else {
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

function editTask(button: HTMLButtonElement) {
    let li = button.parentElement as HTMLLIElement;
    let oldText = li.childNodes[0].textContent?.trim() || "";

    li.innerHTML = `
    <input type="text" value="${oldText}">
    <button onclick="saveTask(this)">Save</button>
    <button onclick="this.parentElement.remove()">Delete</button>
  `;
}

function saveTask(button: HTMLButtonElement) {
    let li = button.parentElement as HTMLLIElement;
    let inputBox = li.querySelector("input") as HTMLInputElement;
    let newText = inputBox.value;

    li.innerHTML = `
    ${newText}
    <button onclick="this.parentElement.remove()">Delete</button>
    <button onclick="editTask(this)">Edit</button>
  `;
}
