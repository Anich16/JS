
//Increment each element of array  by one
function increaseByOne(arr) {
	for(var i = 0; i < arr.length; i++) {
		if (arr[i] == undefined) {
			arr[i] = 1;
        } else {
			arr[i] += 1;
		}
	}
}

// Increasing each element of input array by 1
function promptIncreaseByOne () {
	var inputString = prompt("Введите элементы через пробел"),
		inputArr = inputString.split(" "),
		outputArr = [];

    for( var i = 0; i < inputArr.length; i++) {
         var element = parseInt(inputArr[i]);
         if (!isNaN(element)) {		
            outputArr.push(element+1);
        }	
	}
	console.log(outputArr);	
	
}



// Сount words from the entered message
function countWords () {
	var inputString = prompt("Введите сообщение");
	var isWord = false;
	var count = 0;
    
	for( var i = 0; i < inputString.length; i++){
        if (inputString[i] != " " && isWord == false) {
			count++;
			isWord = true;
		} else if (inputString[i] == " " && isWord == true) { 
			isWord = false;
		}
	}
	return count;
}

// Print simple numbers
function countSimpleNumbers () {
    var inputNumber = parseInt(prompt("Введите число"));	
	var arr = [];
	var isSimple = false;
	for (var i = 2; i < inputNumber; i++){
		isSimple = true;
		for (var j = 2; j <= i; j++ ) {
			if (i % j == 0 && i != j) {
				isSimple = false;
				break;
			}
		}

		if (isSimple) arr.push(i);

	}
	console.log(arr);
	if (arr.length ==0) {
		alert("В промежутке нет простых чисел");
	}
}