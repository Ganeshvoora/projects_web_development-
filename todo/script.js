let todoList = {};




function additem() {
    let newTodo = document.getElementById("input").value;
    let idvalue = "id" + Math.ceil(Math.random() * 100000);
    if (newTodo === "") {
        alert("Please enter a todo");
    }
    else {
        todoList[idvalue] = newTodo;

        let listitem1 = document.createElement("li");
        listitem1.id = idvalue;
        document.getElementById("todoListItems").appendChild(listitem1);

        let listitem2 = document.createElement("div");
        listitem2.classList.add("todo");
        listitem1.appendChild(listitem2);

        let listitem3 = document.createElement("div");
        listitem2.appendChild(listitem3);

        let listitem4 = document.createElement("input");
        listitem4.type = "checkbox";
        listitem4.id = "check" + idvalue;
        listitem3.appendChild(listitem4);

        let listitem5 = document.createElement("label");
        listitem5.htmlFor = "check" + idvalue;
        listitem5.textContent = " " + newTodo;
        listitem3.appendChild(listitem5);

        let listitem6 = document.createElement("button");
        listitem6.classList.add("delete-btn");
        listitem6.textContent = "Delete";
        listitem2.appendChild(listitem6);

        listitem3.onclick = function () {
            if (listitem4.checked) {
                listitem5.style.textDecoration = "line-through";
            } else {
                listitem5.style.textDecoration = "none";
            }
        }

        listitem6.onclick = function () {
            listitem1.remove();
            delete todoList[idvalue];
            saveItems()
        }
        document.getElementById("input").value = "";
    }
    saveItems()

}




function saveItems() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    if (todoList.lenght === 0) {
        document.getElementById("saveButton").style.display = "none";
    } else {
        document.getElementById("saveButton").style.display = "block";
    }
}




function load() {
    let storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList) {
        todoList = JSON.parse(storedTodoList);
    } else {
        return;
    }

    for (let key in todoList) {
        let listitem1 = document.createElement("li");
        listitem1.id = key;
        document.getElementById("todoListItems").appendChild(listitem1);

        let listitem2 = document.createElement("div");
        listitem2.classList.add("todo");
        listitem1.appendChild(listitem2);

        let listitem3 = document.createElement("div");
        listitem2.appendChild(listitem3);


        let listitem4 = document.createElement("input");
        listitem4.type = "checkbox";
        listitem4.id = "check" + key;
        listitem3.appendChild(listitem4);

        let listitem5 = document.createElement("label");
        listitem5.htmlFor = "check" + key;
        listitem5.textContent = " " + todoList[key];
        listitem3.appendChild(listitem5);

        let listitem6 = document.createElement("button");
        listitem6.classList.add("delete-btn");
        listitem6.textContent = "Delete";
        listitem2.appendChild(listitem6);


        listitem3.onclick = function () {
            if (listitem4.checked) {
                listitem5.style.textDecoration = "line-through";
            } else {
                listitem5.style.textDecoration = "none";
            }
        }

        listitem6.onclick = function () {
            listitem1.remove();
            delete todoList[key];
            saveItems()
        }
    }

}


document.addEventListener("DOMContentLoaded", load);