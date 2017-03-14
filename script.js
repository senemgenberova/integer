document.getElementById('input').addEventListener('keydown', function(event) {
    // console.log(event.which);
    if (event.which >= 48 && event.which <= 57) {
        return true;
    } else {
        event.preventDefault();
    }
});

// var input = document.getElementById('input');

// input.addEventListener('keydown', function(event) {

// });