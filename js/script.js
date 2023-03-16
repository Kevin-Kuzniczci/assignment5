const employeeID = document.getElementById("id");
const employeeName = document.getElementById("name");
const employeeExtension = document.getElementById("ext");
const employeeEmail = document.getElementById("email");
const employeeDepartment = document.getElementById("department");

let submit = document.getElementById("empForm");

submit.addEventListener("click", (e) => console.log(`${e.employeeID.value}`, `\n`, `${e.employeeName.value}`, `\n`, `${e.employeeExtension.value}`, `\n`, `${e.employeeEmail.value}`, `\n`, `${e.employeeDepartment.value}`));
