// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event Listeners

loadEventListeners();

// Load all event Listeners
function loadEventListeners(){
  // Add Task Event
  form.addEventListener('submit', addTask);
  // Remove Task Event
  form.addEventListener('click', removeTask);
  // Clear Task Event
  clearBtn.addEventListener('click', clearTask);
  //Filter tasks event
  filter.addEventListener('keyup', filterTask); 
}

// Add Task
function addTask(e){
  if(taskInput.value === ""){
    alert('Add a Task');
  }

  // Create li element 
  const li = document.createElement('li');

  // add class
  li.className = 'collection-item';
  // Create Text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link element
  const link = document.createElement('a');
  // Add Class
  link.className = "delete-item secondary-content";
  // Add icon html
  link.innerHTML ='<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);
  // Clear input
  taskInput.value = '';
  console.log(li);

  e.preventDefault();
}

// Remove Task 
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-items')){
    if(confirm('Are you sure? ')){
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Task
function clearTask() {  
  // TaskList.innerHTML = '';

  // Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  
  // https://jsperf.com/innerhtml-vs-removechild

}

// filter Task

function filterTask(e) {  
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection').forEach(function(task){
    const item= task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  })
}