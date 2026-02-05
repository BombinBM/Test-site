
function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Your name is " + myName;
}

var myHeading = document.querySelector("h1");
var myButton = document.querySelector("button");

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Your name is " + storedName;
}

myButton.onclick = function () {
    setUserName();
}

document.querySelector("h1").onclick = function ()
{
    alert("Don't touch the heading!");
}

var myImage = document.querySelector("img");

myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images\\ndup-768x525.png") {
        myImage.setAttribute("src", "images\\photo.png");
    } else {
         myImage.setAttribute("src", "images\\ndup-768x525.png");
    }
}

