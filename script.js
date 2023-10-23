const list = document.createElement("ul");
const info = document.createElement("p");
const html = document.querySelector("html");
const inputButton = document.createElement("button");
const resetButton = document.createElement("button");

info.textContent =
  "Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.";
inputButton.textContent = "Click to expand";
resetButton.textContent = "Click to reset";

document.body.appendChild(info);
document.body.appendChild(inputButton);

inputButton.onclick = function () {
  const listContent = prompt("How many do you want the list item to have?");
  document.body.removeChild(inputButton);
  document.body.appendChild(resetButton);
  document.body.appendChild(list);
  // list.appendChild(listItem);
  for (let index = 0; index < Number(listContent); index++) {
    const listItem = document.createElement("li");
    listItem.textContent = index;
    list.appendChild(listItem);
  }
};

resetButton.onclick = function (e) {
  e.stopPropagation();
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  const listContent = prompt("Enter new content for your list item");
  for (let index = 0; index < Number(listContent); index++) {
    const listItem = document.createElement("li");
    listItem.textContent = index;
    list.appendChild(listItem);
  }
};
