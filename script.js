let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [
  {
    text: "Learn HTML",
    uniqueNo : 0
  },
  {
    text: "Learn CSS",
    uniqueNo : 1
  },
  {
    text: "Learn JavaScript",
    uniqueNo : 2
  }
];

function onTodoStatusChanged(checkboxId, lableId) {
  let checkBoxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(lableId);
  labelElement.classList.toggle("checked");

}

function onDeleteToDo(todoId) {
  let todoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);
  let index = parseInt(todoId.replace("todo","").trim());
  todoList.splice(index,index);
  console.log(todoList);
}

function createAndAppendTodo(todo) {
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoItemsContainer.appendChild(todoElement);

  
  let checkboxId = "checkbox"+todo.uniqueNo;
  let lableId = "label"+todo.uniqueNo;
  let todoId = "todo"+todo.uniqueNo;

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.classList.add("checkbox-input");

  todoElement.id = todoId;

  inputElement.onclick = function () {
    onTodoStatusChanged(checkboxId, lableId);
  }
  
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId );
  labelElement.classList.add("checkbox-label");
  labelElement.id = lableId;
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIcon.onclick = function () {
    onDeleteToDo(todoId);
  }
  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}


function onAddTodo() {
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;

  let newTodo = {
    text : userInputValue,
    uniqueNo: todoList.length
  }
  todoList.push(newTodo);

  createAndAppendTodo(newTodo);
}

let addTodoButton = document.getElementById("addTodoButton");
addTodoButton.onclick = function() {
  onAddTodo();
}