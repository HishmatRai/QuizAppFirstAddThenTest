
function DataSubmit(){
    var firstName = document.getElementById("firstName").value;
console.log(firstName);
var lastName = document.getElementById("lastName").value;
console.log(lastName);
var idNumber = document.getElementById("idNumber").value;
console.log(idNumber);
var email = document.getElementById("email").value;
console.log(email);
var contact = document.getElementById("contact").value;
console.log(contact);

if(firstName.length === 0){
    alert("Please Enter First Name");
    return false;
}
if(lastName.length === 0){
    alert("Please Enter Last Name");
    return false;
}
if(idNumber.length === 0){
    alert("Please Enter Id Number");
    return false;
}
if(email.length === 0){
    alert("Please Enter Correct Email");
    return false;
}
if(contact.length < 11){
    alert("Please Enter Correct Number");
    return false;
}
    window.location.href="../Student-Quiz/StudentQuiz.html"
}