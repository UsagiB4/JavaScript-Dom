function eventClick(){
    document.body.style.backgroundColor = 'white';
}

function colorBlue(){
    document.body.style.backgroundColor = 'blue';
}
function colorYellow(){
    document.body.style.backgroundColor = 'yellow';
}

let newBtn = document.getElementById('blue');
newBtn.onclick = colorBlue;

let yellowBtn = document.getElementById('yellow');
yellowBtn.addEventListener('click', colorYellow);