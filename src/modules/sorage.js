export default class myTodoClass {
  constructor(description) {
    this.description = description;
  }

  static clearInput = () => {
    const inputField = document.querySelector('#run');
    inputField.value = '';
    return true;
  }

  static getTodo = () => {
    let todoList = [];
    const data = localStorage.getItem('todo');
    if (data === null) {
      localStorage.setItem('todo', JSON.stringify(todoList));
    }
    todoList = JSON.parse(localStorage.getItem('todo'));
    return todoList;
  }

  static getIndex = () => {
    const todoList = myTodoClass.getTodo();
    let index = 0;
    if (todoList === null) {
      return index + 1;
    }
    index = todoList.length + 1;
    return index;
  }

  static updateIndex = () => {
    const todoList = myTodoClass.getTodo();
    todoList.forEach((item) => {
      const indx = todoList.findIndex((obj) => obj === item);
      item.index = indx + 1;
    });
    localStorage.setItem('todo', JSON.stringify(todoList));
  }

  addTodo = () => {
    const data = myTodoClass.getTodo();
    const index = myTodoClass.getIndex();
    const todo = {
      index,
      description: this.description,
      completed: false,
    };

    if (data === null) {
      data.push(todo);
      localStorage.setItem('todo', JSON.stringify(data));
    }
    let newtodoList = JSON.parse(localStorage.getItem('todo'));
    newtodoList = [...data, todo];
    localStorage.setItem('todo', JSON.stringify(newtodoList));
    myTodoClass.clearInput();
    myTodoClass.display();
    myTodoClass.updateIndex();
  }

  static display() {
    const todoList = myTodoClass.getTodo();
    const list = document.querySelector('.list');
    let str = '';
    todoList.forEach((todo) => {
      str += `<li class="list-item">
            <div class="form-group">
            <input type="checkbox" id="${todo.index}" value="${todo.description}" class="checkbox">
            <textarea class="textarea">${todo.description}</textarea>
          </div>
          <div class="action-icons">
              <i class="fa fa-trash-can delete" id="delete"></i>
          </div>
          </li>`;
    });
    list.innerHTML = str;
    myTodoClass.addEventListenersToListItems();
    myTodoClass.updateIndex();
    myTodoClass.checkedTask();
  }

  static removeTodo = (index) => {
    const todoList = myTodoClass.getTodo();
    todoList.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(todoList));
    myTodoClass.addEventListenersToListItems();
    myTodoClass.display();
    myTodoClass.updateIndex();
  }

  static updateTodo = (index, value) => {
    const todoList = myTodoClass.getTodo();
    todoList.forEach((item) => {
      const indx = todoList.findIndex((obj) => obj === item);
      if (index === indx) {
        item.description = value;
      }
      localStorage.setItem('todo', JSON.stringify(todoList));
    });
    myTodoClass.updateIndex();
  }

  static completed = (index, value) => {
    const todoList = myTodoClass.getTodo();
    todoList[index - 1].completed = value;
    localStorage.setItem('todo', JSON.stringify(todoList));
    myTodoClass.updateIndex();
  }

  static clearCompleted = () => {
    const todoList = myTodoClass.getTodo();
    const uncompleted = todoList.filter((todo) => todo.completed === false);
    localStorage.setItem('todo', JSON.stringify(uncompleted));
    myTodoClass.display();
  }

  static checkedTask = () => {
    const todoList = myTodoClass.getTodo();
    todoList.forEach((item) => {
      if (item.completed === true) {
        document.querySelector(`#\\3${item.index}`).checked = true;
        document.querySelector(`#\\3${item.index}`).nextElementSibling.classList.toggle('line-through');
      }
    });
  }

  static reset = () => {
    window.location.reload();
  }

  static addEventListenersToListItems = () => {
    document.querySelectorAll('.checkbox').forEach((link) => {
      link.addEventListener('click', (e) => {
        link.nextElementSibling.classList.toggle('line-through');
        myTodoClass.completed(link.id, e.target.checked);
      });
    });
    document.querySelectorAll('.textarea').forEach((link, index) => {
      link.addEventListener('keyup', (e) => {
        e.preventDefault();
        myTodoClass.updateTodo(index, e.target.value);
      });
    });
    document.querySelectorAll('.delete').forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        myTodoClass.removeTodo(index);
      });
    });
  };
}