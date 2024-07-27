document.getElementById('addTaskBtn').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value;

  if (taskText === '') return;

  const taskList = document.getElementById('taskList');
  const listItem = document.createElement('li');
  listItem.className = 'flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow';

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskSpan.className = 'text-gray-700';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'deleteTaskBtn bg-red-500 text-white p-1 rounded-lg hover:bg-red-600 transition duration-300';

  deleteButton.addEventListener('click', function() {
    taskList.removeChild(listItem);
  });

  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);
  taskInput.value = '';
});
