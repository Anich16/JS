var form = document.getElementById("form-block");
    submit = form.elements.btnSubmit,
    reset = form.elements.reset,
    inputs = form.elements,
    errorMessages = {
        name: "Некорректное имя",
        email: "Некорректный email",
        password: "Некорректный пароль",
        repeatPassword: "Пароли не совпадают"
    };

submit.addEventListener("click", sendData);
reset.addEventListener("click", cancelSending);

function sendData (event) { // 
    var data = {};
      
    if (validate()) {
        data.name = inputs.name.value;
        data.email = inputs.email.value;
        data.password = inputs.password.value;
        data.gender = inputs.gender.value;
        console.log(data);
        // form.submit(); // If the function works, the page will reload.
    }
}

function validate () { //Checks form validations
    var arrError = []; 
    var isValid = true;

    clearMessages ();

    checkFields (inputs, arrError);
    checkPasswords (inputs.password, inputs.repeatPassword, arrError);

    if (arrError.length > 0) {
        for (var i = 0; i < arrError.length; i++) {
            showMessage (arrError[i]);
        }
        isValid = false;
        console.log(arrError);
    } 

    return isValid;
}

function clearMessages () { //Clears error messages
    var errorMessages = form.getElementsByClassName("error-text");
    for (var i = errorMessages.length - 1; i >= 0; i--) {
        errorMessages[i].remove();
    }
}

function checkFields (inputs, arrError) { //Checks the filling of fields, where checks each field to fill
    for (var i = 0; i < inputs.length; i++) {
        if (!checkField(inputs[i])) {
            arrError.push(inputs[i].name);
        }         
    }
}

function checkField (input) { //Checks every field to fill.
    var isValid = true;

    if (isFieldRequired(input) ) {
        if ( !isFieldEmpty(input)) {
            if (input.hasAttribute('pattern')) {
                var pattern = input.getAttribute('pattern');
                var reg = new RegExp(pattern);

                if (!reg.test(input.value.toUpperCase())) { 
                     isValid = false;
                } 
            } 
        } else {
            isValid = false;
        } 
    } 
    return isValid;
}

function checkPasswords (passwordField, repeatPasswordField, arrError) {//Сhecks for password matching
    if (passwordField.value != repeatPasswordField.value) {
        arrError.push(repeatPasswordField.name);
    }
}

function isFieldRequired (input) {
    return input.hasAttribute("required"); 
} 

function isFieldEmpty (input) {
    return input.value == "" || input.value == " ";
}

function showMessage (field) { 
    var msgError = document.createElement("span");
    msgError.appendChild(document.createTextNode(errorMessages[field]));
    msgError.className = "error-text";
    inputs[field].parentElement.appendChild(msgError);   
}

function cancelSending (event) {
    console.log("Отправка отменена");
}