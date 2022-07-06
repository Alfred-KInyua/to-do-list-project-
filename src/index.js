import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const todoItems = [
    {
      description: 'Do homework',
      completed: 'true',
      index: 0,
    },
    {
      description: 'Go shopping',
      completed: 'true',
      index: 1,
    },
    {
      description: 'Prepare a budget',
      completed: 'true',
      index: 2,
    }];
  todoItems.forEach((todoItems) => {
    const display = document.querySelector('.display');
    const items = document.createElement('li');
    const textItems = document.createTextNode(todoItems.description);
    items.appendChild(textItems);
    display.appendChild(items);
  });
});