let p_div = document.getElementById('aDiv');
let ch_div = document.createElement('H1')
let ch2_div = document.createElement('h3');

function calculation(a, b){
    let add = a + b;
    let multi = a * b;
    ch_div.innerHTML = "".concat(a, ' + ', b, ' = ', add);
    p_div.appendChild(ch_div);
    ch2_div.innerHTML = "".concat(a, ' X ', b, ' = ', multi);;
    p_div.appendChild(ch2_div);
}

calculation(3, 5)


