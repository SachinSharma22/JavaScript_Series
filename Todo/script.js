// Input for write task
const Input = document.createElement("input");
Input.id = "task_id";
Input.placeholder = "Write Your Task";
Input.type = "text";
document.body.appendChild(Input);

document.body.style.padding = "50px"

const Button = document.createElement("button");
Button.innerText = "Add";
Button.style.marginLeft = "10px";
document.body.appendChild(Button);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));

// Div to arrange elements
const div_Element = document.createElement("div");
div_Element.id = "data_id";
document.body.appendChild(div_Element);

// Function to perform operation
const addTask = () => {
  const input_Value = document.getElementById("task_id").value;
  if (input_Value === "") return;
  const div_Tag = document.getElementById("data_id");
  const task_Container = document.createElement('div');
  let task = document.createElement("span");
  task.innerText = input_Value;
  task_Container.append(task);
  const del_Button = document.createElement('button');
  del_Button.innerText = 'Delete';
  del_Button.style.marginLeft = "10px";
  task_Container.append(del_Button);

  div_Tag.appendChild(task_Container);

  del_Button.addEventListener('click', () => {
    task_Container.remove();
  })
  // clear input after adding
  document.getElementById("task_id").value = "";
};
Button.addEventListener("click", addTask);
