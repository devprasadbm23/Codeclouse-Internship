document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let taskInput = document.getElementById('task-input');
    let taskText = taskInput.value.trim();

    if (taskText) {
        let taskList = document.getElementById('task-list');
        let listItem = document.createElement('li');
        listItem.textContent = taskText;

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
});