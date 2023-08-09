let arrayOfTodos = [
    {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }
];

let filteredTodos = [];

const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
            console.log('response:', response);
            return response.json();
        })
        .then((data) => {
            console.log('data:', data);
            arrayOfTodos = data;
        });
};

const logTodos = () => {
    console.log(arrayOfTodos);
};

const clearTodosFromView = () => {
    const orderedList = document.getElementById('todo-list');
    orderedList.innerHTML = '';
};

const populateTodos = (todosToPopulate = arrayOfTodos) => {
    const orderedList = document.getElementById('todo-list');
    let index = 0;

    for (let todo of todosToPopulate) {
        const newLi = document.createElement("li");
        const newContent = document.createTextNode(index + 1); 
        newLi.appendChild(newContent);
        orderedList.appendChild(newLi);

        if (todo.completed) {
            console.log(" todo number:", index + 1); 
        }

        index++; 
    }
};

const filterByUserId = () => {
    const userId = parseInt(document.getElementById('userIdFilter').value);
    
    if (userId < 1 || userId > 10) {
        alert("Please enter a valid user ID (1-10)");
        return;
    }

    filteredTodos = arrayOfTodos.filter(todo => todo.userId === userId);
    
    clearTodosFromView();
    populateTodos(filteredTodos);
};

const showCompleted = () => {
    const completedTodos = filteredTodos.filter(todo => todo.completed);
    
    clearTodosFromView();
    populateTodos(completedTodos);
};

const showNotCompleted = () => {
    const notCompletedTodos = filteredTodos.filter(todo => !todo.completed);
    
    clearTodosFromView();
    populateTodos(notCompletedTodos);
};


fetchTodos();
