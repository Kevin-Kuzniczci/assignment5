const employeeID = document.getElementById("id");
const employeeName = document.getElementById("name");
const employeeExtension = document.getElementById("ext");
const employeeEmail = document.getElementById("email");
const employeeDepartment = document.getElementById("department");

employeeID.addEventListener("click", (e) => console.log(`${e.employeeID.value}`));
