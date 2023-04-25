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

function schimbaContinut(resursa, jsFisier, jsFunctie) {
    var xhttp;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
        /* onreadystatechange, onload, onerror */
        xhttp.onreadystatechange =
        function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                document.getElementById("continut").innerHTML = xhttp.responseText;

                if (jsFisier) {
                    var elementScript = document.createElement('script');
                    elementScript.onload = function () {
                        console.log("hello");
                        if (jsFunctie) {
                            window[jsFunctie]();
                        }
                    };
                    elementScript.src = jsFisier;
                    document.head.appendChild(elementScript);
                } else {
                    if (jsFunctie) {
                        window[jsFunctie]();
                    }
                }

                
            }
        }
        xhttp.open("GET", "http://localhost:5678/" + resursa + '.html', true);
        xhttp.send();
    }
}
