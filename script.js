const validateButton = document.getElementById("submit-button");
const passwordTextField = document.getElementById("password");
const confirmPasswordTextField = document.getElementById("confirm_password");

validateButton.addEventListener("click", onValidateButtonClick);

function onValidateButtonClick(event){
    const passwordText = passwordTextField.value;
    const confirmPasswordText = confirmPasswordTextField.value;
    if (passwordText != confirmPasswordText){
        alert("Passwords do not match!");
        event.preventDefault(); // Stops form submission
    }
}