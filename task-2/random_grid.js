function createCell(cellIndex) {
    const container = document.querySelector('.container');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.justifyContent = 'center';

    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    cell.setAttribute('id', `item${cellIndex}`);
    container.appendChild(cell);
}

function createGrid() {
    for (let i = 1; i <= 100; i++) {
        createCell(i);
    }
}

function changeCellBackgroundColor() {
    const cells = document.querySelectorAll('.cell');
    setInterval(function () {
        let randomCellNumber = Math.floor(Math.random() * cells.length);
            cells[randomCellNumber].classList.add('active');
            setTimeout(() => cells[randomCellNumber].classList.remove('active'), 500)},
        500);
}

function main() {
    createGrid();
    changeCellBackgroundColor();
}

main();
