// here we will stop event bubbling.
// for this we can use stopPropagation() or stopImmediatePropagation()


document.getElementById('firstM').addEventListener('click', function(e){
    console.log('First Month');
    e.stopPropagation();
})

document.getElementById('ordered').addEventListener('click', function(e){
    console.log('month list is clicked');
    
})

document.getElementById('container').addEventListener('click', function(e){
    console.log('I am the container')
})