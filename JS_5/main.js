//Creating menu items
// var ul = document.createElement("ul");
// ul.className = "menu-list";

// var numItem = +prompt("Введите необходимое число элементов меню");


// for ( var i = 0; i < numItem; i++) {
//     var li = document.createElement("li");
//     li.className ="menu-item";
//     var text =  "Меню";
//     li.appendChild(document.createTextNode(text));
//     ul.appendChild(li);
// }

// document.body.appendChild(ul);


// Adding and removing items
var input = document.createElement("input");
input.setAttribute("type", "number");
var btn = document.createElement("input");
btn.setAttribute("value", "Add");
btn.setAttribute("type", "submit");
var ul = document.createElement("ul");
ul.className = "menu-list";

btn.addEventListener("click", addItem);

function addItem () {
    
    var numItem = input.value;
    
    for ( var i = 0; i < numItem; i++) {
        var li = document.createElement("li");
        li.className ="menu-item";
        var btnDelete = document.createElement("button");
        btnDelete.setAttribute("type", "reset");
        btnDelete.appendChild(document.createTextNode("X"));

        (function (li) {
            btnDelete.addEventListener("click", function () {
                deleteItem(li);
            })
        })(li);
        
        var text = "Меню";
        li.appendChild(document.createTextNode(text));
        li.appendChild(btnDelete);
        ul.appendChild(li);
    }
    
    
}

function deleteItem (element) {
    ul.removeChild(element);
}

document.body.appendChild(input);
document.body.appendChilddd(btn);
document.body.appendChilddd(ul);