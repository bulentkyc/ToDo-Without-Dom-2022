let toDoList = [];

/////////////////////////////////////////////////////
//Function to receive todoas a text to push into the toDoList array 
//as an object with isDone property 
const createToDo = (itemText) => {
    toDoList.push({itemText, isDone:false});
}

console.log(toDoList);
//Function to read from array and prepare a list to show on prompt message.
//returns the final list
const getToDoList = () => {
    let list = '';

    toDoList.forEach((item, index) => {
        list += `${index}. ${item.itemText} - ${item.isDone?'done':'undone'}
    `
    });

    return list;
}

//Function to find correct object in the toDoList array
//uses getToDoList to have list of todos
//uses index numbers that propted by user
//calls switchDone function to switch value of isDone
const getItemToSwitchDone = () => {
    let msg = `
    ${getToDoList()}
    Please type a number of the item to swtich the status
    `
    let itemIndex = prompt(msg);
    switchDone(toDoList[itemIndex])
}

//Function to switch isDone property of any object
const switchDone = (item) => {
    item.isDone = !item.isDone;
}

const editItem = () => {
    let msg = `
    ${getToDoList()}
    Please type a number of the item to edit
    `
    let itemIndex = prompt(msg);
    let newText = prompt('Please update the task', toDoList[itemIndex].itemText);
    toDoList[itemIndex].itemText = newText;
}

/////////////////////////////////////////////////////


let toDoItem;
const menu = `
Please type a new todo or
1. Make any item done or undone
2. Edit any item on the list
3. Delete any item
q. Quit
`;

do {
    toDoItem = prompt(menu , 'q');

    switch (toDoItem) {
        case '1':
            getItemToSwitchDone();
            break;
    
        case '2':
            editItem();
            break;
    
        case '3':
            break;
    
        case 'q':
            break;
    
        default:
            createToDo(toDoItem);
            break;
    }

} while (toDoItem !== 'q');




