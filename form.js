var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["Username"] = document.getElementById("Username").value;
    formData["Emailid"] = document.getElementById("Emailid").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["Address"] = document.getElementById("Address").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.Username;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.Emailid;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.phone;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.password;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Username").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Emailid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Address").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Username;
    selectedRow.cells[1].innerHTML = formData.Emailid;
    selectedRow.cells[2].innerHTML = formData.phone;
    selectedRow.cells[3].innerHTML = formData.Address;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("Username").value = '';
    document.getElementById("Emailid").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("Address").value = '';
    selectedRow = null;
}
