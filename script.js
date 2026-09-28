//your JS code here. If required.

function fetchValue(name) {
    return document.getElementsByName(name)[0].value;
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = fetchValue("FirstName");
    let lastName = fetchValue("LastName");
    let phoneNumber = fetchValue("PhoneNumber");
    let emailId = fetchValue("EmailId");

    let output =
        "First Name: " + firstName +
        " Last Name: " + lastName +
        " Phone Number: " + phoneNumber +
        " Email ID: " + emailId;

    alert(output);
});