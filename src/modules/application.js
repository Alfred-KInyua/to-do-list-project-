export default class MyTodoClass {
  constructor(desc) {
    this.desc = desc;
  }

  static clearInput = () => {
    const capture = document.querySelector('#run');
    capture.value = '';
    return true;
  }

  static getTodo = () => {
    let todoList = [];
    const info = localStorage.getItem('todo');
    if (info === null) {
      localStorage.setItem('todo', JSON.stringify(todoList));
    }
    todoList = JSON.parse(localStorage.getItem('todo'));
    return todoList;
  }

  static getIndex = () => {
    const todoList = MyTodoClass.getTodo();
    let index = 0;
    if (todoList === null) {
      return index + 1;
    }
    index = todoList.length + 1;
    return index;
  }

  static updateIndex = () => {
    const todoList = MyTodoClass.getTodo();
    todoList.forEach((item) => {
      const indx = todoList.findIndex((obj) => obj === item);
      item.index = indx + 1;
    });
    localStorage.setItem('todo', JSON.stringify(todoList));
  }

  addtodolist = () => {
    const info = MyTodoClass.getTodo();
    const index = MyTodoClass.getIndex();
    const todo = {
      index,
      desc: this.desc,
      completed: false,
    };

    if (info === null) {
      info.push(todo);
      localStorage.setItem('todo', JSON.stringify(info));
    }
    let newtodoList = JSON.parse(localStorage.getItem('todo'));
    newtodoList = [...info, todo];
    localStorage.setItem('todo', JSON.stringify(newtodoList));
    MyTodoClass.clearInput();
    MyTodoClass.display();
    MyTodoClass.updateIndex();
  }

  static display() {
    const todoList = MyTodoClass.getTodo();
    const list = document.querySelector('.list');
    let str = '';
    todoList.forEach((todo) => {
      str += `<form class="list-item">
            <div class="form-group">
             <input type="checkbox" id="${todo.index}" value="${todo.desc}" class="checkbox" required>
            <textarea required class="textarea" >${todo.desc}</textarea>
            </div>
          <div class="action-icons">
              <i class="fa fa-trash-can delete" id="delete"></i>
          </div>
          </form>`;
    });
    list.innerHTML = str;
    MyTodoClass.addEventListenersToListItems();
    MyTodoClass.updateIndex();
    MyTodoClass.checkedTask();
  }

  static removeTodo = (index) => {
    const todoList = MyTodoClass.getTodo();
    todoList.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(todoList));
    MyTodoClass.addEventListenersToListItems();
    MyTodoClass.display();
    MyTodoClass.updateIndex();
  }

  static updateTodo = (index, value) => {
    const todoList = MyTodoClass.getTodo();
    todoList.forEach((item) => {
      const indx = todoList.findIndex((obj) => obj === item);
      if (index === indx) {
        item.desc = value;
      }
      localStorage.setItem('todo', JSON.stringify(todoList));
    });
    MyTodoClass.updateIndex();
  }

  static completed = (index, value) => {
    const todoList = MyTodoClass.getTodo();
    todoList[index - 1].completed = value;
    localStorage.setItem('todo', JSON.stringify(todoList));
    MyTodoClass.updateIndex();
  }

  static clearCompleted = () => {
    const todoList = MyTodoClass.getTodo();
    const uncompleted = todoList.filter((todo) => todo.completed === false);
    localStorage.setItem('todo', JSON.stringify(uncompleted));
    MyTodoClass.display();
  }

  static checkedTask = () => {
    const todoList = MyTodoClass.getTodo();
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
        MyTodoClass.completed(link.id, e.target.checked);
      });
    });
    document.querySelectorAll('.textarea').forEach((link, index) => {
      link.addEventListener('keyup', (e) => {
        e.preventDefault();
        MyTodoClass.updateTodo(index, e.target.value);
      });
    });
    document.querySelectorAll('.delete').forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        MyTodoClass.removeTodo(index);
      });
    });
  };
}