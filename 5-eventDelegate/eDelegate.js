var lists = document.getElementsByClassName('lists');

let i = 0;
while (i < lists.length){
    let listItem = lists[i];
    console.log(listItem);
    listItem.addEventListener('click', function(e){
        console.log(this.innerHTML);  // you can use `event.target` instead of `this`
        console.log(e.target.parentNode);  // this will return the parent element
    })
    i += 1;
}

// :::::::::Deleting a child node from parent node:::::::::

let oList = document.getElementsByClassName('oLists');
for(let j = 0;j < oList.length; j++){
    let listItems = oList[j];
    console.log(listItems)
    listItems.addEventListener('click', function(e){
        e.target.parentNode.removeChild(e.target);
    })
}


// ::::::::: adding item using event :::::::::

let addBtn = document.getElementById('addMe');
let add = document.getElementsByClassName('addItem');
let listAdd = document.getElementById('adding');
let count = 1;

// adding
addBtn.addEventListener('click', function(event){
    let newItem = document.createElement('li');
    newItem.innerText = "New Item "+ count;

    listAdd.appendChild(newItem);
    count++;
})

// deleting

    for(let i = 0; i < add.length; i++){
        listAdd.addEventListener('click', function(e){
            e.target.parentNode.removeChild(e.target)
        })
    }