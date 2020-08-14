function insertRow() {
    let rowIndex = findRow() + 1;

    if (countRows() === false) {
        const container = document.querySelector('.container');

        const form = document.createElement('form');
        form.setAttribute('method', 'GET');

        const label = document.createElement('label');
        label.setAttribute('for', `item_${rowIndex}`);
        label.textContent = `Item ${rowIndex}:`;
        form.appendChild(label);

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', `item_${rowIndex}`);
        input.setAttribute('id', `item_${rowIndex}`);
        form.appendChild(input);

        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'Remove';
        buttonRemove.setAttribute('id', `${rowIndex}`);
        buttonRemove.addEventListener('click', function () {
            container.removeChild(form);
            alert("You removed " + rowIndex + " row");
            countRows();
        })
        form.appendChild(buttonRemove);
        container.appendChild(form);
    }
}

function findRow() {
    let lastForm = document.querySelector('form:last-child');
    let labelElement = lastForm.querySelector('label').getAttribute('for');

    return parseInt(labelElement.replace('item_', ''));
}

function countRows() {
    let allForms = document.querySelectorAll('form').length - 1;
    if (allForms === 10) {
        document.querySelector('button').disabled = true;
        alert("You can create only 10 rows!");
        return true;
    } else {
        document.querySelector('button').disabled = false;
        return false;
    }
}

function main() {
    const buttonAdd = document.getElementById('add_row');
    buttonAdd.addEventListener('click', insertRow);
}

main();