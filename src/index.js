document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form");
  form.addEventListener("submit", (e)=>
  { e.preventDefault();
    createTodo(e.target["new-task-description"].value, e.target["priority"].value);
    form.reset();
  })
});
function createTodo(todo, priority)
{
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "Delete";
  li.textContent = todo;
  li.appendChild(btn);

  if (priority === "high"){
    li.style.color = "red";
  }else if(priority === "medium"){
    li.style.color = "yellow";
  }else if(priority === "low"){
    li.style.color = "green";
  }
  document.querySelector("#tasks").appendChild(li);
}
function handleDelete(e){
  e.target.parentNode.remove();
}