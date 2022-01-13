let toDoList = [];

/////////////////////////////////////////////////////
const createToDo = (itemText) => {
    toDoList.push({itemText, isDone:false});
}

console.log(toDoList);

const getToDoList = () => {
    let list = '';

    toDoList.forEach((item, index) => {
        list += `${index}. ${item.itemText} - ${item.isDone?'done':'undone'}
    `
    });

    return list;
}


const getItemToSwitchDone = () => {
    let msg = `
    ${getToDoList()}
    Please type a number of the item to swtich the status
    `
    let itemIndex = prompt(msg);
    switchDone(toDoList[itemIndex])
}

const switchDone = (item) => {
    item.isDone = !item.isDone;
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




