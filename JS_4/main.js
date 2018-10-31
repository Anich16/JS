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

function f (string) {
	var newString = string.toLowerCase();
	var arr = [];
	arr = newString.split('');
	var newArr = [];
	newArr = arr.reverse();
for (var i  = 0; i < newArr.length; i++){
	for (var j = i; j < arr.lengt; j++){
        if (newArr[0] != arr[0]){
      	 break;
        }	 
        else if (newArr[i] == arr[j]){
            alert("Слово является полидромом");
        } else {
		alert("Слово не является полидромом");
		}


	}
	}
}
