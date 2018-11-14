var form = document.getElementById("form-block");
    submit = form.elements.submit,
    reset = form.elements.reset,
    input = document.querySelectorAll("input");

submit.addEventListener("click", sendData);
reset.addEventListener("click", cancelSending);

function sendData (event) {
    console.log("Форма отправлена");
}

function cancelSending (event) {
    console.log("Вы отменили отправку");
}

function checkField () {
    if (input.hasAttribute('pattern')) {
        var pattern = input.getAttribute('pattern');
         var reg = new RegExp(pattern);
         if (!reg.test(input.value.toUpperCase())) { 
            ............
         } 
      } 
}