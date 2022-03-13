const amount = document.getElementById("expense");
const date = document.getElementById("date");
const desc = document.getElementById("desc");
const trackerTable = document.getElementById("tracked");
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");

function submitBtn(){
    if (amount.value == ""|| date.value == ""){
        alert("Please enter more information.")
        return
    }
    var newRow = trackerTable.insertRow(-1)
    var newAmount = newRow.insertCell("0")
    var newDate = newRow.insertCell("1")
    var newDesc = newRow.insertCell("2");
    var del = newRow.insertCell("3");
    var delBtn = document.createElement("input");

    newAmount.textContent = amount.value;
    newDate.textContent = date.value;
    newDesc.textContent = desc.value;
    delBtn.value = "X";
    delBtn.setAttribute("class", "delete-button");
    delBtn.type = "button";
    del.appendChild(delBtn);
    delBtn.onclick = deleteButton();

    amount.value = "";
    date.value = "";
    desc.value = "";
};

submit.addEventListener("click", function(){
    submitBtn();
});

document.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    submitBtn();
});

function clearAll() {
    for(var i = trackerTable.rows.length - 1; i >0; i--){
        trackerTable.deleteRow(i);
    }
};

function deleteButton() {trackerTable.deleteRow};

clear.addEventListener("click", function(){
    clearAll();
})