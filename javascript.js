let gridX = 8;
let gridY = 8;

const container = document.querySelector('.container');

makeGrid();

function makeGrid () {
    deleteGrid();
    for (let i = 0; i < gridX; i++) {
        const aRow = document.createElement('div');
        aRow.classList.add('row');
        container.appendChild(aRow);
    
        for (let j = 0; j < gridY; j++) {
            const aSquare = document.createElement('div');
            aSquare.classList.add('square');
            aRow.appendChild(aSquare);
        }
    }
    makeHoverFunctionality();
}

function makeHoverFunctionality() {
    const squares = document.querySelectorAll('.square');
   
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'green';
        })
    })
}

const newGrid = document.querySelector('.newGridButton');
newGrid.addEventListener('click', () => {
    console.log("hi");
    let newSize = prompt("What size grid would you like? Max 100");
    if ((isNaN(+newSize)) || +newSize > 100) {
        while ((isNaN(+newSize)) || +newSize > 100) {
            newSize = prompt("Please enter a valid number");
        }
    } 
    gridX = newSize;
    gridY = newSize;
    makeGrid();
});

function deleteGrid() {
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        row.remove();
    })
};