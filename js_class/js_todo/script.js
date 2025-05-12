let msg = document.querySelector(".msg");
let form = document.querySelector("form");
let textInput = document.querySelector("#textInput");
let todos = document.querySelector(".todos");

let todoArr = [];

document.addEventListener("DOMContentLoaded", () => {
  const todos = localStorage.getItem("todos");
  let todoArr = todos ? JSON.parse(todos) : [];
  showTodo(todoArr);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!textInput.value) {
    msg.style.display = "block";
    msg.style.background = "red";
    msg.textContent = "Please add a value";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
  } else {
    let id = Math.random();
    let text = textInput.value;
    let date =
      new Date().toDateString() + " | " + new Date().toLocaleTimeString();
    let todo = {
      id,
      text,
      date,
    };
    msg.style.display = "block";
    msg.style.background = "green";
    msg.textContent = "Todo added successfully";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
    addTodo(todo);

    showTodo(todoArr);
  }

  form.reset();
});

// add todo function
function addTodo(singleTodo) {
  todoArr.unshift(singleTodo);
  localStorage.setItem("todos", JSON.stringify(todoArr));
}

// show todo function
function showTodo(arr) {
  let html = "";
  arr.forEach((todo) => {
    html += `
        <div class='todo'>
            <section>
                <h2>${todo.text}</h2>
                <small>${todo.date}</small>
            </section>
            <button onclick=deleteTodo(${todo.id})>
                DELETE
            </button>
        </div>
    `;
  });
  todos.innerHTML = html;
}

function deleteTodo(id) {
  todoArr = todoArr.filter((todo) => todo.id != id);
  localStorage.setItem("todos", JSON.stringify(todoArr));
  showTodo(todoArr);
}
