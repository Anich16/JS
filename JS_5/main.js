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

var input = document.createElement("input");
input.setAttribute("type", "number");
var btn = document.createElement("input");
btn.setAttribute("value", "Add");
btn.setAttribute("type", "submit");

btn.addEventListener("click", addItem);

function addItem () {
    var ul = document.createElement("ul");
    ul.className = "menu-list";
    
    var numItem = input.value;
    
    
    for ( var i = 0; i < numItem; i++) {
        var li = document.createElement("li");
        li.className ="menu-item";
        var btnDelete = document.createElement("button");
        btnDelete.setAttribute("type", "reset");
        btnDelete.appendChild(document.createTextNode("X"));
        // btnDelete.addEventListener("click", deletItem);
        
        var text = "Меню";
        li.appendChild(document.createTextNode(text));
        li.appendChild(btnDelete);
        ul.appendChild(li);
    }
    
    document.body.appendChild(ul);
}

document.body.appendChild(input);
document.body.appendChild(btn);
