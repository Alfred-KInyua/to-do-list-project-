import MyTodoClass from './modules/application.js';
import './style.css';

const input = document.querySelector('#run');
const form = document.querySelector('.form');
const button = document.querySelector('#check');

MyTodoClass.display();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const desc = input.value;
  const done = new MyTodoClass(desc);
  done.addtodolist();
});

input.addEventListener('focus', (e) => {
  e.preventDefault();
  button.style.display = 'block';
});

document.querySelector('#check').addEventListener('click', (e) => {
  e.preventDefault();
  const desc = input.value;
  const done = new MyTodoClass(desc);
  done.addtodolist();
});

document.querySelectorAll('.clear').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    MyTodoClass.clearCompleted();
  });
});

document.querySelector('.reset').addEventListener('click', (e) => {
  e.preventDefault();
  MyTodoClass.reset();
});
