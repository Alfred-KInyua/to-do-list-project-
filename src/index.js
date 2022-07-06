import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const todoItems = [
    {
      description: 'Do homework',
      completed: true,
      index: 0,
    },
    {
      description: 'Go shopping',
      completed: true,
      index: 1,
    },
    {
      description: 'Prepare a budget',
      completed: true,
      index: 2,
    }];
  todoItems.forEach((todoItems) => {
    const display = document.querySelector('.display');
    const items = document.createElement('div');
    items.innerHTML = `
    <form action="/action_page.php">
  
  <div class ="push">
  <input type="checkbox" id="stuff" name="stuff">
  <label for="inputs" class="inputs"> ${todoItems.description}</label>  <i class="fa-solid fa-ellipsis-vertical"></i>  
  </div>
  </form>`;

    display.appendChild(items);
  });
});