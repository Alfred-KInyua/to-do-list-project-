import MyTodoClass from './modules/application.js';
import './style.css';

const input = document.querySelector('#run');
const button = document.querySelector('#check');

MyTodoClass.display();

input.addEventListener('focus', (e) => {
  e.preventDefault();
  button.style.display = 'block';
});

document.querySelector('#check').addEventListener('click', (e) => {
  e.preventDefault();
  if (input.value) {
    const desc = input.value;
    const done = new MyTodoClass(desc);
    done.addtodolist();
  }
  return 0;
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
