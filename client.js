

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
  
    // $('#addPersonButton').on('mouseover', function () { // on click, run an anonymous callback function
    //     $('body').css('background-color', '#efdce9');
    //     console.log('moused over add person button');
    // });
    // $('#addPersonButton').on('mouseleave', function () { // on click, run an anonymous callback function
    //     $('body').css('background-color', '#ECDB54');
    //     console.log('mouse leave add person button');
    // });
    $('#clickLogger').on('click', function () { // on click, run an anonymous callback function
        console.log('i was clicked');
    });

    $('#addPersonButton').on('click', function () { // on click, run an anonymous callback function
        let newPersonName = $('#nameInput').val();
        console.log(newPersonName);
        $('#personList').append('<li>' + newPersonName + ' ' + '<button class="deleteButton">delete</button>' + '</li>');
    });  

    // descendent selector
    $('#personList').on('click', '.deleteButton', function () {
        console.log('deleteButton was clicked');
        $(this).parent().remove(); // here 'this' refers to that which was just clicked
    });
}// end function onReady
