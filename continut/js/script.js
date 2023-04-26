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

function verificaUserPass() {
    // Get the username and password values from the form
    const username = document.getElementById("lnumeUtilizator").value;
    const password = document.getElementById("lparola").value;

    // Send an AJAX request to the utilizator.json file
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const user = JSON.parse(this.responseText);
        console.log(user.utilizator);

        // Check if the username and password match the user in the JSON file
        if (user.utilizator === username && user.parola === password) {     
            document.getElementById("verifica-raspuns").innerText = "Login successful!";
        } else {
            document.getElementById("verifica-raspuns").innerText = "Invalid username or password.";
        }
    }
    };

    // specify the file path for the JSON data
    var url = "..\\resurse\\utilizatori.json";

    xhttp.open("GET", url, true);
    xhttp.send();
}

function adaugaUserPass() {
    
    const username = document.getElementById("lnumeUtilizInreg");
    const password = document.getElementById("lparolaInreg");
    const lastName = document.getElementById("lnume");
    const firstName = document.getElementById("lprenume");
    const mail = document.getElementById("lemail");
    const phoneNb = document.getElementById("ltel");
  
    const user = {
      utilizator: username.value,
      parola: password.value,
      nume:lastName.value,
      prenume: firstName.value,
      email: mail.value,
      telefon: phoneNb.value,
    };
  
    fetch("/api/utilizatori", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Eroare la adaugarea utilizatorului.");
        }
        const fisier = require('fs');

      const continutJSON = JSON.stringify(myObject);
      var url = "..\\resurse\\utilizatori.json";
      fisier.writeFile(url, continutJSON, 'utf8', function (err) {
          if (err) {
         console.error('Error writing file:', err);
      }   else {
          console.log('File written successfully.');
      }
      });
        
      return response.json();
      })
      .then((data) => {
        console.log("Utilizatorul a fost adaugat cu succes:", data);
      })
      .catch((error) => {
        console.error(error);
      });
  
}