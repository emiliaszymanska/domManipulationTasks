// use these keycodes for calling the appropriate functions
// write your moveX functions and after that
// you can call these like moves[keycode]();

let cell = document.querySelector('.cell');
let cells = document.querySelectorAll('.cell');

(() => {
    initialize()
})();

function initialize() {
    createGrid();
    cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('click', activateCell));
}

function activateCell() {
    this.classList.add('active');
    cell = this;
    cells.forEach(cell => cell.removeEventListener('click', activateCell));
    keyPressed();
}

function createCell(x, y) {
    let cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    cell.setAttribute('x', x);
    cell.setAttribute('y', y);

    document.querySelector('.container').appendChild(cell);

    return cell;
}

function createGrid() {
    for (let x = 1; x <= 10; x++) {
        for (let y = 1; y <= 10; y++) {
            createCell(x, y);
        }
    }
}

function move(newX, newY) {
    let currentRow = parseInt(cell.getAttribute('x'));
    let currentColumn = parseInt(cell.getAttribute('y'));

    if ((currentColumn + newY > 10)) {
        newY -= 1;
    } else if (currentColumn + newY <= 0) {
        newY += 1;
    } else if (currentRow + newX > 10) {
        newX -= 1;
    } else if (currentRow + newX <= 0) {
        newX += 1;
    }

    let nextCell = document.querySelector(`.cell[x="${currentRow + newX}"][y="${currentColumn + newY}"]`);
    cell.classList.remove('active');
    nextCell.classList.add('active');
    cell = nextCell;
}

function keyPressed() {
    document.addEventListener("keydown", function (event) {
        // event.preventDefault();
        switch (event.key) {
            case "ArrowLeft":
                console.log('Left pressed')
                move(0, -1);
                break;
            case "ArrowRight":
                console.log('Right pressed')
                move(0, 1);
                break;
            case "ArrowUp":
                console.log('Up pressed')
                move(-1, 0);
                break;
            case "ArrowDown":
                console.log('Down pressed')
                move(1, 0);
                break;
        }
    })
}
