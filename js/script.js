/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

let count = 0;
let Form = $('addForm');
let emp = $('employees');
let numOfEmployees = $("empCount");


Form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
     e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value;
    let name = $('name').value;
    let extension = $('extension').value;
    let email = $('email').value;
    let dept = $('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let addNewRow = emp.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let idC = addNewRow.insertCell(0);
    let nameC = addNewRow.insertCell(1);
    let extC = addNewRow.insertCell(2);
    let emailC = addNewRow.insertCell(3);
    let deptCell = addNewRow.insertCell(4);
    let deleteBtnC = addNewRow.insertCell(5);
    
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    idC.appendChild(document.createTextNode(id));
    nameC.appendChild(document.createTextNode(name));
    extC.appendChild(document.createTextNode(extension));
    emailC.appendChild(document.createTextNode(email));
    deptCell.appendChild(document.createTextNode(dept));

    // CREATE THE DELETE BUTTON
    let delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm deleteButton';
    delBtn.appendChild(document.createTextNode('X'));
    deleteBtnC.appendChild(delBtn);

    console.log(addNewRow);

    // RESET THE FORM
    Form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    numOfEmployees.textContent = count;
});

// DELETE EMPLOYEE
emp.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteButton')) {
        let addNewRow  = e.target.parentNode.parentNode;
        emp.deleteRow(addNewRow.rowIndex);
        count--;
        numOfEmployees.textContent = count;
    }
});