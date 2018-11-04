// Appearance of a unique massive
function creatingArr (arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (newArr.indexOf(arr[i]) == -1) {
			newArr.push(arr[i]);
		}

	}
return newArr;
}

//function for palindrome definition
function definePalindrome (str) {
	var newStr = str.toUpperCase ().split("");
	var arr = [];
	var isPalindrome = true;
	var reverseArr = [];
	var i;

	for (i = 0; i < newStr.length; i++) {
		if (newStr[i] != " ") {
			arr.push(newStr[i]);
		}
	}
	
	for(i = 0; i < arr.length; i++) {
		reverseArr.push(arr[i]);
	}
	reverseArr.reverse();
	
	for (i = 0; i < arr.length; i++ ) {
		if (arr[i] != reverseArr[i]) {
			isPalindrom = false;
			break;
		}
	 
    }
	
	if (isPalindrom) {
    	alert("Это слово палиндром");
    } else {
		alert("Слово не является палиндромом");
	}
}


//function for palindrome definition more efficient
function definePalindrome (str) {
	var newStr = str.toUpperCase ().split("");
	var arr = [];
	
	for (var i = 0; i < newStr.length; i++) {
		if (newStr[i] != " ") {
			arr.push(newStr[i]);
		}
	}
	for (var j = 0; j < arr.length / 2; j++) {
		if (arr [j] != arr[arr.length- 1 - j] ) {
			alert("Это слово не является палиндромом");
			return;
		}
    }
	alert("Это слово палиндром");
}
