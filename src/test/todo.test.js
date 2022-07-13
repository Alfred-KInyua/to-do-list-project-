import MyTodoClass from '../modules/application.js';

describe('run add test', () => {
  document.body.innerHTML = `
<div class="wrapper">
    <div class="wrap">
      <h2>Today's To Do</h2>
      <i class="fa-solid fa-arrows-rotate reset"></i>
    </div>

    <form class="form">
      <input type="text" required placeholder="Add to your list" id="run">
      <button type="submit" id="check"><i class="fa fa-check"></i></button>
    </form>

    <ul class="list"></ul>

    <div class="footer-section">
      <a href="" class="clear">Clear all completed</a>
    </div>

  </div>
`;
  const task = 'go dancing in the rain';
  const todo = new MyTodoClass(task);

  test('Add item to the list', () => {
    todo.addtodolist();
    const info = JSON.parse(localStorage.getItem('todo'));
    expect(info.length).toBe(1);
  });

  test('Remove item from the list', () => {
    MyTodoClass.removeTodo(0);
    const info = JSON.parse(localStorage.getItem('todo'));
    expect(info.length).toBe(0);
  });
});
