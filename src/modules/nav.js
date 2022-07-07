export default base =()=>{
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const description = inputField.value;
      const todo = new myTodoClass(description);
      todo.addTodo();
    });
    
    inputField.addEventListener('focus', (e) => {
      e.preventDefault();
      submitBtn.style.display = 'block';
    });
    
    document.querySelector('#submit').addEventListener('click', (e) => {
      e.preventDefault();
      const description = inputField.value;
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
    }