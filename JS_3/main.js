// Calculation of body mass index
// var mass = parseFloat(prompt("Введите ваш вес:"));
// var hall = parseFloat(prompt("Введите ваш рост:"))/100;
// var index = (mass / (hall * hall)).toFixed(1);

// if ( index < 16 ) {
// 	alert("У вас дефицит");
// } else if ( index < 18.5 ) {
// 	alert("У вас недостаток веса");
// } else if ( index < 25 ) {
// 	alert("Все в норме");
// } else if ( index < 30 ) {
// 	alert("У вас избыточный вес");
// } else if ( index < 35 ) {
// 	alert("Ожирение 1-ой степени");
// } else if ( index < 40 ) {
// 	alert("Ожирение 2-ой степени");
// } else {
// 	alert("У вас ожирение 3-ей степени");
// }


var massElem = document.getElementById("mass");
var heightElem = document.getElementById("height");
var btn = document.getElementById("button");
var messageElem = document.getElementById("message");
var result;
var mess;
var now = new Date();


btn.addEventListener("click", calculateIndex);

function calculateIndex () {
	result = (parseFloat(massElem.value)) / ((parseFloat(heightElem.value) / 100) * (parseFloat(heightElem.value) / 100)).toFixed(1);


	 if ( result < 16 ) {
		mess = ("У вас дефицит");
	} else if ( result < 18.5 ) {
		mess = "У вас недостаток веса";
	} else if ( result < 25 ) {
		mess = "Все в норме";
	} else if ( result < 30 ) {
		mess = "У вас избыточный вес";
	} else if ( result < 35 ) {
		mess = "Ожирение 1-ой степени";
	} else if ( result < 40 ) {
		mess = "Ожирение 2-ой степени";
	} else {
		mess = "У вас ожирение 3-ей степени";
	}
	addMessage (mess);
}

function addMessage (mess) {
	messageElem.value = now +"\n\n\n"+ mess;
}