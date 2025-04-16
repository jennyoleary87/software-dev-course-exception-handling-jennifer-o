/*
04/15/25
Try to use a try catch block inside these functions or throw an error
and call the function in a try catch block!

example 1 ORIGINAL
function printArray(array) {
    console.log("Names in the list:");
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
*/

function printArray(array) {
    if (array.length != 0) { // validation if user put certain input of 1 or more
        console.log("Names in the list:");
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    } else {
        throw new Error("Error empty array!"); // to check if a valid array is input
    }
}

// try {
//     printArray(["Katy", "Doug", "Bill"]); // no error
//     printArray([]); // Empty array throws catch error message to user
// }
// catch (error) {
//     console.error(error.message)
// }

/* example 2 ORIGINAL
function calculateProduct(a, b) {
    return a * b;
}
*/

function calculateProduct(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    } else {
        throw new Error("Please Pass a Valid Number");
    }
}

try {
    console.log(calculateProduct("a", "b"));
} catch (err) {
    console.log(err.message);
}

/* example 4 ORIGINAL
const incompleteTasks = todos.filter((todo) => !todo.completed);
*/

const todos = [
    { task: "Wash the dishes", completed: null, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
];

try {
    const incompleteTasks = todos.filter(function (todo) {
        if (todo.completed !== undefined && todo.completed !== null) {
            todo.completed = false;
            return true; // tells filter to return todo in the filtered list
        } else {
            throw new Error("Please pass defined objects");
        }
    });

    console.log('Incomplete tasks:', incompleteTasks);
} catch (err) {
    console.log(err.message);
}

/* example 5 ORIGINAL
const sortedByPriority = todos.sort((a, b) => a.priority -
    b.priority);
*/

try {

    const sortedByPriority = todos.sort((a, b) => {
        if (a.priority === undefined || a.priority === null) {
            throw new Error('Todo item is missing a valid "priority" value.');
        }
        if (b.priority === undefined || b.priority === null) {
            throw new Error('Todo item is missing a valid "priority" value.');
        }

        return a.priority - b.priority;
    });
} catch (err) {

    console.log(err.message);
} 
