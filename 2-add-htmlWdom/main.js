// Adding an attribute to an HTML Element

let qrSelect = document.querySelector('h3')  // selecting the first "h3" tag
console.log(qrSelect)

// setAttribute
qrSelect.setAttribute('title', 'a title is here')  // setting an attribute to the first "h3" tag



//:::::::: Adding an HTML element ::::::::

let pg = document.getElementById('pGraph');
let newEl = document.createElement('h3');
newEl.innerHTML = 'Hi there'
pg.appendChild(newEl)

let count = 0;
while(count <= 10){
    let value = count;
    let addElem = document.createElement('h1');
    addElem.innerHTML ="counting: " + value;
    pg.appendChild(addElem)
    count= count + 1;
}
