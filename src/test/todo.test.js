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
  const action = new MyTodoClass(task);

  test('Add item to the list', () => {
    action.addtodolist();
    const info = JSON.parse(localStorage.getItem('todo'));
    expect(info.length).toBe(1);
  });

  test('Remove item from the list', () => {
    MyTodoClass.removeTodo(0);
    const info = JSON.parse(localStorage.getItem('todo'));
    expect(info.length).toBe(0);
  });
  test('Test editing data', () => {
    action.addtodolist();
    new MyTodoClass('todo_1').addtodolist();
    new MyTodoClass('todo_3').addtodolist();
    new MyTodoClass('todo_3').addtodolist();
    const editInfo = 'drink milk';
    MyTodoClass.updateTodo(1, editInfo);
    const info = JSON.parse(localStorage.getItem('todo'));
    expect(info[1].desc).toBe(editInfo);
  });

  test('test updating completed tasks', () => {
    MyTodoClass.completed(1, true);
    const info = JSON.parse(localStorage.getItem('todo'));
    expect(info[0].completed).toBe(true);
  });

  test('test clear completed tasks', () => {
    MyTodoClass.clearCompleted();
    const info = JSON.parse(localStorage.getItem('todo'));
    expect(info[0].completed).toBe(false);
  });
});
