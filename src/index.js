// wait for DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form");// select form eleemnt by its id
  form.addEventListener("submit", (e)=> // add an event listener to 'submit' event on the form
  { 
    e.preventDefault();// prevent the default form submission behaviour
    // call the create todo function with the values from the form inputs
    createTodo(
      e.target["new-task-description"].value,// get the task description
       e.target["priority"].value,// get selected priority
      e.target["due-date"].value); // get due date
    form.reset();// reset form inputs after submission
  })
});
function createTodo(todo, priority, dueDate)// function to create a new todo item
{
  let li = document.createElement("li");//create new list item for the todo
  let btn = document.createElement("button");// create button to delete the todo item
  btn.addEventListener("click", handleDelete);//add a click event listener to the button for deletion 
  btn.textContent = "Delete";// setting button text to delete
  li.textContent = `${todo} (Due: ${dueDate})`;// set content of list item to include the todo and its due date
  li.appendChild(btn);// append the delete button to the list item

  if (priority === "high"){
    li.style.color = "red";// high priority task are red
  }else if(priority === "medium"){
    li.style.color = "yellow"; // medium priority tasks are yellow
  }else if(priority === "low"){
    li.style.color = "green"; // low priority tasks are green
  }
  document.querySelector("#tasks").appendChild(li);// append list item to the task list in html
}
//function to handle deletion of todo item
function handleDelete(e){
  e.target.parentNode.remove();// remove todo item from list when delete button is clicked
}