import  myTodoClass  from './modules/sorage.js';
import './style.css';


const form = document.querySelector('.form');
const input = document.querySelector('#run');
const submitBtn = document.querySelector('#submit');

myTodoClass.display();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = input.value;
  const todo = new myTodoClass(description);
  todo.addTodo();
});

input.addEventListener('focus', (e) => {
  e.preventDefault();
  submitBtn.style.display = 'block';
});

document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  const description = input.value;
  const todo = new myTodoClass(description);
  todo.addTodo();
});

document.querySelectorAll('.clear').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    myTodoClass.clearCompleted();
  });
});

document.querySelector('.reset').addEventListener('click', (e) => {
  e.preventDefault();
  myTodoClass.reset();
});

