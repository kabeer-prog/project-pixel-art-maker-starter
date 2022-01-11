// The tip is that, we are using the Javascript language to "manipulate" an existing webpage built with HTML and CSS. Think of HTML for a second. We are creating "elements" as we code like the paragraphs and other stuff like ;

// (<p>, <table>, <span> etc.)
// To do this project we need to pick them one by one using JavaScript codes like ;

// //'pick' the elements like so;
// document.getElementById('inputHeight')
// which you "pick" the element with your code and do some "programming" on it.

// For example;

// document.getElementById('sizePicker').addEventListener(....)
// Above code "picks" the element 'sizePicker' from the DOM and adds an event listener to it so we can interact with it.,

// Mentors, of course can provide a more solid answer. I just tried to give you some ideas if you felt same like me. I was completely lost after I finished the JS lessons. Mr. Kalehoff has an amazing energy and his passion of sharing his information is obvious from his gestures even but the JS section of this NanoDegree needs some modifications I believe. Good luck with the project and happy coding.



// You will need to access the inputs and form elements. These may help: document.getElementById or document.querySelector. Don't forget to assign them to variables.
// Then, you need to listen when a user submits the form with addEventListener.
// Inside the submit listener, you'll need a function which builds the grid. Get the inputs value and loop through them, adding rows to the table (you will need to get the table element) and cells to each row. insertRow and insertCell are your friends here.
// You will need to add click listeners to paint cells as well.
// One of the behaviors you want is: when a user clicks on a cell, paint it. If you have the cell in a variable, what about adding a click event right after creating it? And you want to change its background (remember: CSS "color" property is to change the font color) by the colorPicker value. This may help: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp








// Select color input 
// Select size input(height, width)
var height, width, color;

// when the submit button is clicked, after the size of the grid is inputted, call function makeGrid()
// $('#sizePicker').submit(function (event){
//     event.preventDefault();
//     height = $('#inputHeight').val();
//     width =$('#inputWidth').val();
//     makeGrid(height, width);
//     // console.log("height is " + height +" and" + "weight is "+ width)
// })
document.querySelector("#sizePicker").addEventListener('click', formSubmission)

function formSubmission(){
    event.preventDefault();
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    makeGrid(height, width);

}
function makeGrid (height, width){

    let table = document.getElementById('pixelCanvas');
    for ( var i = 0; i <= height; i++){
        // table.append('<tr id=tabl' + i + '></tr>');
        table.append(<tr></tr>);
        for (var j= 0; j <= width; j++){
            $('#tabl' + i).append('<td></td>');
        }
}
}

// When size is submitted by the user, call makeGrid()

// function makeGrid(x, y) {

// // Your code goes here!
//         $('tr').remove();
//         for ( var i = 1; i <= x; i++){
//             $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
//             for (var j= 1; j <= y; j++){
//                 $('#table' + i).append('<td></td>');
//             }
//         }
//         ///add color to cell after creation while it's been clicked
//         $('td').click(function addColor(){
//             color =$('#colorPicker').val();

//             if ($(this).attr('style')){
//                 $(this).removeAttr('style')
//             }else{
//                 $(this).attr("style", "background-color:" + color);
//             }
//         })
// }

