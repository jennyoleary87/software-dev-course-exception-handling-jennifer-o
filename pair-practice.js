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
    return a * b;
}

/* example 3 ORIGINAL
function calculateProduct(a, b) {
    return a * b;
}
*/

function calculateProduct(a, b) {
    return a * b;
}

/* example 4 ORIGINAL
const incompleteTasks = todos.filter((todo) => !todo.completed);
*/

const incompleteTasks = todos.filter((todo) => !todo.completed);

try {
    incompleteTasks(["Katy", "Doug", "Bill"]); // no error
    incompleteTasks([]); // Empty array throws catch error message to user
}
catch (error) {
    console.error(error.message)
}

/* example 5 ORIGINAL
const sortedByPriority = todos.sort((a, b) => a.priority -
    b.priority);
*/

const sortedByPriority = todos.sort((a, b) => a.priority -
    b.priority);
