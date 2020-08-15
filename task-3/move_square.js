// use these keycodes for calling the appropriate functions
// write your moveX functions and after that
// you can call these like moves[keycode]();

const container = document.querySelector('.container');
const moves = {
    '97': moveLeft,
    '115': moveDown,
    '119': moveUp,
    '100': moveRight
};

function createSquare(squareIndex) {
    const square = document.createElement('div');
    square.setAttribute('class', 'cell');
    square.setAttribute('id', squareIndex);

    container.appendChild(square);
}

function createGrid() {
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.justifyContent = 'center';

    for (let i = 1; i <= 100; i++) {
        createSquare(i);
    }
}

function moveLeft() {

}

function moveDown() {

}

function moveUp() {

}

function moveRight() {

}

function main() {
    createGrid();

}

main();
