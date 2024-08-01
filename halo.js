function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;
    
    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        this.parentElement.remove();
    };
    
    // Append the button to the list item
    li.appendChild(removeButton);
    
    // Append the list item to the list
    const taskList = document.getElementById('taskList');
    taskList.appendChild(li);
    
    // Clear the input field
    input.value = '';
}
