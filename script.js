// Set changer image//


var myImage = document.querySelector('img')

function changeImage() {
    var catImage = myImage.getAttribute('src')
    if (catImage==='./cat1.jpg') {
        myImage.setAttribute('src','./cat2.jpg');
    } else {
        myImage.setAttribute('src','./cat1.jpg');
    }
}

// set changer button//


var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName() {
    var useName = window.prompt('Please input your name:');
    myHeading.textContent = 'Good day ' + useName;
    localStorage.setItem('name',useName);
}

if (!localStorage.getItem('name')) {
    setUserName();
}else {
    var useName = localStorage.getItem('name');
    myHeading.textContent = 'Good day ' + useName;
}

myButton.onclick = function() {
    setUserName();
}