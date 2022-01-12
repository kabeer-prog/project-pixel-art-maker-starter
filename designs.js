
// Select color input 
// Select size input(height, width)


//"picks" the element with id 'sizePicker' from the DOM and adds an event listener to it so we can interact with it
document.querySelector("#sizePicker").addEventListener('click', submit)

function submit(e){
    e.preventDefault();
    
    let height = document.getElementById('inputHeight').value;
    let width = document.getElementById('inputWidth').value;
    
    // pass on the values of height and width from the inputs to makeGrid function
    
    makeGrid(height, width);
    
}




function makeGrid(height, width){
//     picks" the element with id 'pixelCanvas' i.e table from the DOM,set it to a variable table
    let table = document.getElementById('pixelCanvas');
    table.innerHTML = ""
    for (let i = 0; i< height; i++){
        //insert row to the table
        
      let tableRow = table.insertRow();
      for (let j = 0; j < width; j++){
          //insert cells to the rows
        let column = tableRow.insertCell();
        // pick and prepare the cell to be clicked from the table and add an event listener to it so it can pick vaalues of the color 
        column.addEventListener('click', addColorToCell);
      }
     
    }
}
  
  function addColorToCell(event) {
    color = document.querySelector("#colorPicker");
    //Accessing the DOM using methods of the document object
    event.target.style.backgroundColor = color.value;

 
  }

  






