let enterButton = document.getElementById("enter");
let input = document.getElementById("usrinput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

function inputlength(){
    return input.value.length;
}

function listlength(){
    return item.length;
}

function createListElement(){
    let li = document.createElement("li"); // create an element "li"
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li); // add li to ul
    input.value = "";   // reset the input field

    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    // delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteItem);

    function deleteItem(){
        li.classList.add("delete");
    }
}

function addListAfterClick(){   // we create the list item after making sure that the input field is not empty
    if(inputlength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputlength() > 0 && event.which === 13){
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
