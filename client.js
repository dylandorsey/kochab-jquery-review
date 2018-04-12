

// this is (our very first) callback function.
// it will wait until the document is ready to run it's function
// 
// $(document).ready(onReady());// using onReady() will insert the return of the onReady function into the .ready() method.

$(document).ready(onReady); //this notation will call the function onReady and not the return of onReady.

console.log('jQuery Lecture');

function onReady() {
    console.log('in JQ')
    $('h1').addClass('funny'); // make the h1 'funny' class.
    $('h1').css('color', '#F2552C'); // h1 will be this color (red) because the .css method will change the attribute of the html tag. Attributes take priority over classes.

    
    // getters and setters
    // $() is a jquery selector
    console.log($('h2').text()); //get text value of h2 and console log it
    $('h2').text('You have been set, sir!');
    console.log($('h2').text()); // this logs the value after line 20 because jquery refers to the current DOM view. it has no memory of therebefore
    
    
    // inputs (also getter and setter)
    // you went to the html and added an input
    $('#nameInput').val('dylan dorsey'); // setter for input val
    console.log($('#nameInput').val()); // getter for input val


    // events

    // event handler
    $('#clickableButton').on('click', function () { // on click, run an anonymous callback function
        console.log($('#nameInput').val());
    });
    $('#clickableButton').on('mouseover', function () { // on click, run an anonymous callback function
        $('body').css('background-color', '#red');
        console.log('moused over');
    });
    $('#clickLogger').on('click', function () { // on click, run an anonymous callback function
        console.log('i was clicked');
    });
}

