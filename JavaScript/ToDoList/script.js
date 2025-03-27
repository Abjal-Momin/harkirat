// let input = document.querySelector("input");
// let button = document.querySelector("button");
// let Container = document.querySelector(".list-Container");

// let c = 1;

// function deleteList(index) {
//   const pName = document.querySelector("#list-" + index);
//   Container.removeChild(pName);
// }
// function AddTask() {
//   let newP = document.createElement("p");
//   newP.setAttribute("id", "list-" + c);
//   newP.innerHTML =
//     input.value+
//     "<button class='new-list bnt' onclick='deleteList(" +
//     c +
//     ")'>Remove</button>";
//   Container.appendChild(newP);
//   input.value = "";
//   c = c + 1;
// }

//*******************************************************************

let todo = [];
function todoList() {
  const input = document.querySelector("input");
  todo.push({
    title: input.value,
  });
  render();
  return input;
}

function createEl(todo, index) {
  const listEl = document.createElement("p");
  const div = document.createElement("div");
  div.setAttribute("class", "inputBox");
  const removeButton = document.createElement("button");
  removeButton.setAttribute("class", "bnt");
  removeButton.setAttribute("onClick", "remove(" + index + ")");
  removeButton.innerHTML = "Delete";
  listEl.innerHTML = todo.title;
  div.appendChild(listEl);
  div.appendChild(removeButton);
  return div;
}
function remove(index) {
  todo.splice(index, 1);
  render();
}

function render() {
  const divEl = document.querySelector(".list-Container");
  divEl.innerHTML = " ";
  for (let i = 0; i < todo.length; i++) {
    const element = createEl(todo[i], i);
    divEl.appendChild(element);
  }
}
