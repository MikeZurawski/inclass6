var newElement = document.createElement("li");
var textElement = document.createTextNode("gluten-free soy sauce");
newElement.appendChild(textElement);


$(function() {
    $('ul').before("<p>Just Updated</p>");
    $('li.hot').prepend("+");
    $("li#four").after(newElement);
});

