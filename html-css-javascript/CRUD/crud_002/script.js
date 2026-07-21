/*---------only for update------------*/
selectedRow = null;
/*------------------------------------*/

/*------------for reading-------------*/

                /*------------for reading without updating-----
                function onformSubmit(){
                    var formData = readFormData();
                    inserNewRecord(formData);
                    resetForm();
                }
                ----------------------------*/

                /*------------for reading without updating-----*/
function onformSubmit(){
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            inserNewRecord(formData);
        else
            updateRecord(formData);

        resetForm();
    } 
}

function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullname").value;
    formData["code"] = document.getElementById("code").value;
    formData["Sal"] = document.getElementById("Sal").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}


/*------------for creating-------------*/
function inserNewRecord(data) {
    var table = document.getElementById("employerlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.code;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Sal;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = ` <a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a> `
}

function resetForm() {
    document.getElementById("fullname").value = "";
    document.getElementById("code").value = "";
    document.getElementById("Sal").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}


/*--------------------Update----------------------- */
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("code").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Sal").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName
    selectedRow.cells[1].innerHTML = formData.code
    selectedRow.cells[2].innerHTML = formData.Sal
    selectedRow.cells[3].innerHTML = formData.city
}


/*--------------------Delete----------------------- */

function onDelete(td) {
    if(confirm('Are you sure to delete  this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employerlist").deleteRow(row.rowIndex);
        resetForm();
    }
}

/*------------PREENCHIMENTO OBRIGATORIO-------------------*/
function validate() {
    isValid = true;
    if (document.getElementById("fullname").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");

            /** é possivel remover o seletor dum estilo do css atraves do javascript
             * o comando é 
             * .classList.remove("hide");
             * hide é o seletor
             * 
             * mas contains mantem o seletor como parte do estilo
             * .classList.contains("hide");
            */
    } else {
        isValid = true;
        if (document.getElementById("fullNameValidationError").classList.contains("hide"));
            (document.getElementById("fullNameValidationError").classList.add("hide"))
    }
    return isValid;
}