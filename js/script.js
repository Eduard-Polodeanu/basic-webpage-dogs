setInterval(dateAndTime, 1000);
infoLocatie();
function dateAndTime() {
    document.getElementById('data-si-ora').innerHTML = Date();
}

function infoURL() {
    document.getElementById("info-url").innerHTML = 
    "Adresa URL: " + window.location.href;
}

function infoLocatie() {
    document.getElementById("info-locatie").innerHTML = navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    document.getElementById("info-locatie").innerHTML =  "Locație curentă: </br>" + 
    "Latitudine: " + position.coords.latitude + "<br>" +
    "Longitudine: " + position.coords.longitude + "<br>";
}

function infoBrowser() {
    document.getElementById("info-browser").innerHTML = 
    "Sistemul de operare: " + navigator.platform +
    "</br>Browser: " + navigator.appName +
    "</br>Versiune: " + navigator.appVersion;
}

function hideOnClick(id) {
    var elem = document.getElementById(id);
    elem.style.display = "none";
}


