
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


const populateTodos = () => {
    const orderedList = document.getElementById('todo-list');
    
    orderedList.innerHTML = '';

    
    for (let indexArray = 0; indexArray < arrayOfTodos.length; indexArray++) {
        const newLi = document.createElement("li");
        const newContent = document.createTextNode(arrayOfTodos[indexArray].title);
        newLi.appendChild(newContent);
        orderedList.appendChild(newLi);

        if (arrayOfTodos[indexArray].completed) {
            console.log("Completed todo title:", arrayOfTodos[indexArray].title);
        }
    }
};
