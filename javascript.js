let gridX = 8;
let gridY = 8;

const container = document.querySelector('.container');

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

