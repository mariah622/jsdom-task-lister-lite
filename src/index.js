document.addEventListener('DOMContentLoaded', () => {

  const createTaskForm = document.getElementById('create-task-form')
  const newTaskDescription = document.getElementById('new-task-description')
  const ul = document.getElementById('tasks')

  document.addEventListener('submit', createNewTasks)

  function createNewTasks(e){
    e.preventDefault();
    const newTask = document.createElement('li')
    newTask.innerHTML = newTaskDescription.value

    appendNewTask(newTask)
    e.target.reset()

  }

  function appendNewTask(newTask){
   ul.append(newTask)
  }

})








