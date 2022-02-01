// DOM can access HTML elements in may ways:
/*
    1. document.getElementById
    2. document.getElementsByClassName
    3. document.getElementsByName
    4. document.getElementsByTagName
*/
document.getElementsByTagName('h1');  // it will access all the h1 tag

document.getElementById('head').style.color = 'blue';  // accessing the element with ID called "head"
let nList = document.getElementsByClassName('nameList');
//console.log(nList) // "getElementsByClassName" returns an array of elements. So you need to access individual array to apply style.
for(let i = 0; i < nList.length; i++){
    let elem = nList[i]
    console.log(elem);
    elem.style.borderBottom = '5px solid';
    elem.style.borderBottomColor = 'green';
    elem.style.padding = '20px';

    // visit w3school to learn more about DOM style.
}

// :::::::: querySelector & querySelectorAll :::::::: 
let qrSelect = document.querySelector('.special'); // selects only the first matching elements
console.log(qrSelect);


let qrSelectAll = document.querySelectorAll('.special');  // returns all the matching elements
console.log(qrSelectAll);

let i = 0;
while(i < qrSelectAll.length){
    let spElem = qrSelectAll[i];
    console.log(spElem)
    spElem.style.color = 'red';
    i = i + 1;
}