let attempts = 0;

function handlePassword(){

    let passwordBox = document.getElementById("passwordBox");
    let result = document.getElementById("result");
    let button = document.getElementById("mainButton");

    let userPassword = passwordBox.value.toLowerCase();

    if(userPassword === "saheema"){

        result.innerHTML =
        "<span style='color:green;font-weight:bold;'>"
        + "Login Successful<br><br>"
        + "Student Name : Saheema<br>"
        + "Department : Computer Science<br>"
        + "Semester : 4th Semester<br>"
        + "Status : Active"
        + "</span>";

    } else {

        attempts++;

        if(attempts >= 3){

            result.innerHTML =
            "<span style='color:red;font-weight:bold;'>Access Blocked!</span>";

            passwordBox.disabled = true;
            button.disabled = true;

        } else {

            result.innerHTML =
            "<span style='color:red;font-weight:bold;'>"
            + "Wrong Username<br>"
            + "Remaining Attempts : "
            + (3 - attempts)
            + "</span>";
        }
    }
}
</script>
