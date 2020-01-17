var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderingToDo() {
    listElement.innerHTML = '';
  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);
    var linkElement = document.createElement('a');
    var iElement = document.createElement('i');
    //
    var pos = todos.indexOf(todo);
    //
    linkElement.setAttribute('href', '#');
    linkElement.setAttribute('title', 'Delete');
    linkElement.setAttribute('onclick', 'deleteToDo(' + pos + ')');
    iElement.setAttribute('class', 'fas fa-trash-alt');
    //
    linkElement.appendChild(iElement);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
    
  }
}

renderingToDo();

function addToDo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderingToDo();
    savingToStorage();
}

buttonElement.onclick = addToDo;

function deleteToDo(pos) {
    todos.splice(pos, 1);
    renderingToDo();
    savingToStorage();
}

function savingToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}