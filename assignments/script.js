let savedPassword = "";
let attempts = 0;
let isPasswordCreated = false;

function handlePassword(){

    let passwordBox =
    document.getElementById("passwordBox");

    let result =
    document.getElementById("result");

    let button =
    document.getElementById("mainButton");

    let label =
    document.getElementById("labelText");

    // Create Password
    if(isPasswordCreated == false){

        savedPassword = passwordBox.value;

        if(savedPassword == ""){

            result.innerHTML =
            "<span style='color:red;'>"
            + "Please create a password"
            + "</span>";

            return;
        }

        result.innerHTML =
        "<span style='color:green;font-weight:bold;'>"
        + "Password Created Successfully<br>"
        + "Submit Password to Continue"
        + "</span>";

        passwordBox.value = "";

        passwordBox.placeholder =
        "Enter Password";

        label.innerHTML =
        "Enter Password";

        button.innerHTML =
        "Login";

        isPasswordCreated = true;

        return;
    }

    // Verify Password
    let userPassword = passwordBox.value;

    // Do While Loop
    do{

        if(userPassword == savedPassword){

            result.innerHTML =
            "<span style='color:green;font-weight:bold;'>"
            + "Correct Password<br><br>"
            + "Student Name : Renee<br>"
            + "Department : Computer Science<br>"
            + "Semester : 4th Semester<br>"
            + "Status : Active"
            + "</span>";

            return;
        }

        attempts++;

        result.innerHTML =
        "<span style='color:red;font-weight:bold;'>"
        + "Wrong Password<br>"
        + "Remaining Attempts : "
        + (3 - attempts)
        + "</span>";

    }while(false);

    // While Loop
    while(attempts >= 3){

        result.innerHTML =
        "<span style='color:red;font-weight:bold;'>"
        + "Access Blocked!"
        + "</span>";

        passwordBox.disabled = true;
        button.disabled = true;

        break;
    }
}
