const amount = document.getElementById("expense");
const date = document.getElementById("date");
const desc = document.getElementById("desc");
const trackerTable = document.getElementById("tracked");
const submit = document.getElementById("submit");

function submitBtn(){
    if (amount.value == ""|| date.value == ""|| desc.value == ""){
        alert("Please enter more information.")
        return
    }
    var newRow = trackerTable.insertRow(-1)
    var newAmount = newRow.insertCell("0")
    var newDate = newRow.insertCell("1")
    var newDesc = newRow.insertCell("2");
    var delBtn = newRow.insertCell("3");

    newAmount.textContent = amount.value;
    newDate.textContent = date.value;
    newDesc.textContent = desc.value;
    delBtn.textContent = "X";
    delBtn.setAttribute("class", "delete-button")

    amount.value = "";
    date.value = "";
    desc.value = "";
};

submit.addEventListener("click", submitBtn());

document.addEventListener("keydown", function(event){
    if(event.key == "Enter")
    submitBtn();
});