// array to store todos
let todos = [];

// DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementId('todo-input');
const todoList = document.getElementById('todo-list');

// function to render todos
function renderTodos() {
    todoList.innerHTML = ''; // Clear the list
    todos.forEach((todo, index) => {
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todo}</span>
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    })
}

// function to add new todo
function addTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = '';
        renderTodos();
    }
}

// function to edit a todo
function editTodo(index) {
    constupdatedTodo = prompt('Edit your todo:', todos[index]);
    if (updatedTodo !==null) {
        todos[index] = updatedTodo.trim();
        renderTodos();
    }
}

// function to delete a todo
function deleteTodo(index) {
    if (confirm('Are you sure you want to delete this todo?')) {
        todos.splice(index, 1);
        renderTodos();
    }
}

// event listeners
todoForm.addEventListener('submit', addTodo);

// initial render
renderTodos();