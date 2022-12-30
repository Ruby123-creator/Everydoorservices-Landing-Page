function submitForm() {
    // 1. get all the user input values
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let reason = document.getElementById('reason').value;
    console.log(firstname,lastname, email, reason);
    // check if all the inputs are filled
    if (firstname != null && lastname != null && email != null) {
        // show the alert only if all inputs are filled
         alert("Form submitted successfully!")
    } else {
        alert("All fields are required!")
    }
}