//Selectors
const todoInput =document.querySelector(".todo-input")
const todoButton =document.querySelector(".todo-button")
const todoList =document.querySelector(".todo-list");



//Event Listeners
todoButton.addEventListener("click",addTodo);

//Functions

function addTodo(event){
  //Prevents form from submitting on click
  event.preventDefault();

  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create LI

  const newTodo = document.createElement("li");
  newTodo.innerText="Hey";
  newTodo.classList.add("todo-item");

  todoDiv.appendChild(newTodo);

  //Check Mark Button

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check" ></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Check Trash Button

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash" ></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to List
  todoList.appendChild(todoDiv)
}